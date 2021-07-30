import '@testing-library/jest-dom';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { PlayingFieldForm } from '.';
import React from 'react';
import { setTextEvent } from 'app/shared/utils/test';

describe('PlayingFieldForm', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof PlayingFieldForm> & {
    onSubmit: SinonStub;
  };

  beforeEach(() => {
    componentProps = {
      onSubmit: stub(),
      formTitle: 'test playing field from',
      handleListTicket: jest.fn(),
    };
    componentWrapper = render(<PlayingFieldForm {...componentProps} />);
  });

  it('shoult match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('debe fallar al enviar todos los campos que faltan', async () => {
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(2);
    expect(spans[0].textContent).toBe('El campo id cancha es requerido.');
    expect(spans[1].textContent).toBe('El campo status Cancha es requerido.');
  });

  it('debe fallar al enviar un campo faltantes', async () => {
    const elem = componentWrapper.container;
    const idCancha = elem.querySelector('input[name="idCancha"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      idCancha && fireEvent.change(idCancha, setTextEvent('idCancha', '1'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(1);
    expect(spans[0].textContent).toBe('El campo status Cancha es requerido.');
  });

  it('deberia enviar', async () => {
    const elem = componentWrapper.container;
    const idCancha = elem.querySelector('input[name="idCancha"]');
    const statusCancha = elem.querySelector('input[name="statusCancha"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      idCancha && fireEvent.change(idCancha, setTextEvent('idCancha', '1'));
    });

    await wait(() => {
      statusCancha &&
        fireEvent.change(statusCancha, setTextEvent('statusCancha', 'bueno'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const formSubmitted = componentProps.onSubmit.firstCall.args[0];

    expect(formSubmitted.idCancha).toBe(1);
    expect(formSubmitted.statusCancha).toBe('bueno');
  });
});
