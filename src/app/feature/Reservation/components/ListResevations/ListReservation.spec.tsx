import '@testing-library/jest-dom';
import React from 'react';
import { RenderResult, render, wait, fireEvent } from '@testing-library/react';
import { ReservationList } from '.';
import { setTextEvent } from 'app/shared/utils/test';

describe('', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof ReservationList>;

  beforeEach(() => {
    componentProps = {
      reservationLists: [
        {
          idTicket: 1,
          telefonoUsuario: 3186905006,
          nombreUsuario: 'juan',
          horaIngreso: 1626283800000,
          horaSalida: 1626283800000,
          idCancha: 1,
          valor: 50000,
        },
        {
          idTicket: 2,
          telefonoUsuario: 3186905006,
          nombreUsuario: 'Sebastian',
          horaIngreso: 1626283800000,
          horaSalida: 1626283800000,
          idCancha: 2,
          valor: 50000,
        },
      ],
      reservation: {
        idTicket: 3,
        telefonoUsuario: 3186905006,
        nombreUsuario: 'juan',
        horaIngreso: 1626283800000,
        horaSalida: 1626283800000,
        idCancha: 1,
        valor: 50000,
      },
      saveReservation: jest.fn(),
      updateReservation: jest.fn(),
    };

    componentWrapper = render(<ReservationList {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('Deber tener un titulo', () => {
    const elem = componentWrapper.container;
    const tittle = elem.querySelectorAll('h1');

    expect(tittle[0].textContent).toMatch(/reservaciones/i);
  });
});
