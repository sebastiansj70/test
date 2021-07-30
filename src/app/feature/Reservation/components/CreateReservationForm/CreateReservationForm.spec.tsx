import '@testing-library/jest-dom';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { CreateReservationForm } from './';
import React from 'react';
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
    componentWrapper = render(<CreateReservationForm {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('debe fallar al enviar todos los campos que faltan', async () => {
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(parseInt('6',10));
    expect(spans[parseInt('0',10)].textContent).toBe('El campo telefono de usuario es requerido.');
    expect(spans[parseInt('1',10)].textContent).toBe('El campo nombre de usuario es requerido.');
    expect(spans[parseInt('2',10)].textContent).toBe('El campo hora de ingreso es requerido.');
    expect(spans[parseInt('3',10)].textContent).toBe('El campo hora de salida es requerido.');
    expect(spans[parseInt('4',10)].textContent).toBe('El campo numero de cancha es requerido.'
    );
    expect(spans[parseInt('5',10)].textContent).toBe('El campo valor es requerido.');
  });

  it('debe fallar al enviar dos campos faltantes', async () => {
    const elem = componentWrapper.container;
    const telefonoUsuario = elem.querySelector('input[name="telefonoUsuario"]');
    const nombreUsuario = elem.querySelector('input[name="nombreUsuario"]');
    const horaIngreso = elem.querySelector('input[name="horaIngreso"]');
    const horaSalida = elem.querySelector('input[name="horaSalida"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      telefonoUsuario && fireEvent.change( telefonoUsuario, setTextEvent('telefonoUsuario', '318690') );
    });

    await wait(() => {
      nombreUsuario && fireEvent.change(nombreUsuario, setTextEvent('nombreUsuario', 'juan'));
    });

    await wait(() => {
      horaIngreso && fireEvent.change( horaIngreso,setTextEvent('horaIngreso', '1626383800000'));
    });

    await wait(() => {
      horaSalida && fireEvent.change(horaSalida,setTextEvent('horaSalida', '1626383800000'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(parseInt('2',10));
    expect(spans[parseInt('0',10)].textContent).toBe('El campo numero de cancha es requerido.');
    expect(spans[parseInt('1',10)].textContent).toBe('El campo valor es requerido.' );
  });

  it('deberia eniviar', async () => {
    const elem = componentWrapper.container;
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
	  horaSalida && fireEvent.change( horaSalida, setTextEvent('horaSalida', '1626888600000'));
	});

    await wait(() => {
      horaIngreso && fireEvent.change( horaIngreso,setTextEvent('horaIngreso', '1626888600000'));
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

    const formSubmitted = componentProps.onSubmit.firstCall.args[parseInt('0',10)];

    expect(formSubmitted.telefonoUsuario).toBe(parseInt('3186905006',10));
    expect(formSubmitted.nombreUsuario).toBe('juan');
    expect(formSubmitted.horaIngreso).toBe(parseInt('1626888600000',10));
    expect(formSubmitted.horaSalida).toBe(parseInt('1626888600000',10));
    expect(formSubmitted.idCancha).toBe(parseInt('1',10));
    expect(formSubmitted.valor).toBe(parseInt('50000',10));
  });
});
