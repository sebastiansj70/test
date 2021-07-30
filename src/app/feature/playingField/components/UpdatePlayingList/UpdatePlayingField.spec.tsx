import '@testing-library/jest-dom';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import React from 'react';
import { UpdatePlayingList } from '.';
import { setTextEvent } from 'app/shared/utils/test';

describe('UpdatePlayinField Form', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof UpdatePlayingList> & {
    onSubmit: SinonStub;
  };

  beforeEach(() => {
    componentProps = {
      onSubmit: stub(),
      formTitle: 'tittle form test',
      handleCloseModal: jest.fn(),
      playingField: {
        idCancha: 1,
        statusCancha: 'Bueno',
      },
    };
    componentWrapper = render(<UpdatePlayingList {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('debe falla al faltar un dato', async () => {
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');
    const statusCancha = elem.querySelector('input[name="statusCancha"]');

    await wait(() => {
      statusCancha &&
        fireEvent.change(statusCancha, setTextEvent('statusCancha', ''));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(1);
    expect(spans[0].textContent).toBe('El campo stado de cancha es requerido.');
  });

  it('deberia enviar', async () => {
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');
    const idCancha = elem.querySelector('input[name="idCancha"]');
    const statusCancha = elem.querySelector('input[name="statusCancha"]');

    await wait(() => {
      idCancha && fireEvent.change(idCancha, setTextEvent('idCancha', '1'));
    });

    await wait(() => {
      statusCancha &&
        fireEvent.change(statusCancha, setTextEvent('statusCancha', 'Bueno'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const formSubmitted = componentProps.onSubmit.firstCall.args[1];

    expect(formSubmitted.idCancha).toBe(1);
    expect(formSubmitted.statusCancha).toBe('Bueno');
  });
});
