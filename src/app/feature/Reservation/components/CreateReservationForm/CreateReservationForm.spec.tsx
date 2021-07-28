import '@testing-library/jest-dom'
import React from "react";
import { RenderResult, render, wait, fireEvent } from "@testing-library/react";
import { CreateReservationForm } from "./";
import { SinonStub, stub } from "sinon";
import { setTextEvent } from 'app/shared/utils/test';

describe('CreateReservationForm ', () => {
    let componentWrapper: RenderResult;
    let componentProps: React.ComponentProps<typeof CreateReservationForm> & {
        onSubmit: SinonStub;
    };

    beforeEach(() => { 
        componentProps = {
            onSubmit: stub(),
            formTitle: 'test create form',
            handleReservationList: jest.fn(),
        };
        componentWrapper = render(<CreateReservationForm  {...componentProps} />);
    });

    it('should match snapshot', () => {
        expect(componentWrapper.container).toMatchSnapshot();
    });

    it('debe fallar al enviar todos los campos que faltan', async () => {
        const elem = componentWrapper.container;
        const submitButton = elem.querySelector('button[type="submit"]');

        await wait(() => {
            submitButton && fireEvent.click(submitButton)
        });
        const spans = elem.querySelectorAll('span');
        expect(spans.length).toBe(6);
        expect(spans[0].textContent).toBe('El campo telefono de usuario es requerido.');
        expect(spans[1].textContent).toBe('El campo nombre de usuario es requerido.');
        expect(spans[2].textContent).toBe('El campo hora de ingreso es requerido.');
        expect(spans[3].textContent).toBe('El campo hora de salida es requerido.');
        expect(spans[4].textContent).toBe('El campo numero de cancha es requerido.');
        expect(spans[5].textContent).toBe('El campo valor es requerido.');

    });



    it('debe fallar al enviar dos campos faltantes', async () => {
        const elem = componentWrapper.container;
        const telefonoUsuario = elem.querySelector('input[name="telefonoUsuario"]');
        const nombreUsuario = elem.querySelector('input[name="nombreUsuario"]');
        const horaIngreso = elem.querySelector('input[name="horaIngreso"]');
        const horaSalida = elem.querySelector('input[name="horaSalida"]');
        const submitButton = elem.querySelector('button[type="submit"]');

        await wait(() => {
            telefonoUsuario && fireEvent.change(telefonoUsuario, setTextEvent('telefonoUsuario', '318690'));
        });

        await wait(() => {
            nombreUsuario && fireEvent.change(nombreUsuario, setTextEvent('nombreUsuario', 'juan'));
        });

        await wait(() => {
            horaIngreso && fireEvent.change(horaIngreso, setTextEvent('horaIngreso', '1626283800000'));
        });

        await wait(() => {
            horaSalida && fireEvent.change(horaSalida, setTextEvent('horaSalida', '1626283800000'));
        });

        await wait(() => {
            submitButton && fireEvent.click(submitButton);
        });

        const spans = elem.querySelectorAll('span');
        expect(spans.length).toBe(2);
        expect(spans[0].textContent).toBe('El campo numero de cancha es requerido.');
        expect(spans[1].textContent).toBe('El campo valor es requerido.');
    });

    it('deberia eniviar', async () => {
        const elem = componentWrapper.container
        const telefonoUsuario = elem.querySelector('input[name="telefonoUsuario"]');
        const nombreUsuario = elem.querySelector('input[name="nombreUsuario"]');
        const horaIngreso = elem.querySelector('input[name="horaIngreso"]');
        const horaSalida = elem.querySelector('input[name="horaSalida"]');
        const idCancha = elem.querySelector('input[name="idCancha"]');
        const valor = elem.querySelector('input[name="valor"]');
        const submitButton = elem.querySelector('button[type="submit"]');

        await wait(() => {
            telefonoUsuario && fireEvent.change(telefonoUsuario, setTextEvent('telefonoUsuario', '3186905006'));
        });

        await wait(() => {
            nombreUsuario && fireEvent.change(nombreUsuario, setTextEvent('nombreUsuario', 'juan'));
        });

        await wait(() => {
            horaIngreso && fireEvent.change(horaIngreso, setTextEvent('horaIngreso', '1626283800000'));
        });

        await wait(() => {
            horaSalida && fireEvent.change(horaSalida, setTextEvent('horaSalida', '1626283800000'));
        });

        await wait(() => {
            idCancha && fireEvent.change(idCancha, setTextEvent('idCancha', '1'));
        });

        await wait(() => {
            valor && fireEvent.change(valor, setTextEvent('valor', '50000'));
        });

        await wait(() => {
            submitButton && fireEvent.click(submitButton);
        });

        const formSubmitted = componentProps.onSubmit.firstCall.args[0];

        expect(formSubmitted.telefonoUsuario).toBe(3186905006);
        expect(formSubmitted.nombreUsuario).toBe('juan');
        expect(formSubmitted.horaIngreso).toBe(1626283800000);
        expect(formSubmitted.horaSalida).toBe(1626283800000);
        expect(formSubmitted.idCancha).toBe(1);
        expect(formSubmitted.valor).toBe(50000);
    });
});