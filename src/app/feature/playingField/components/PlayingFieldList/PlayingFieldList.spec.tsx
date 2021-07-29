import '@testing-library/jest-dom';
import React from 'react';
import { RenderResult, render, wait, fireEvent } from '@testing-library/react';
import { PlayingFieldList } from '.';
import { setTextEvent } from 'app/shared/utils/test';

describe('PlayingFieldList test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof PlayingFieldList>;

  beforeEach(() => {
    componentProps = {
      playingFieldLists: [
        {
          idCancha: 1,
          statusCancha: 'Bueno',
        },
        {
          idCancha: 2,
          statusCancha: 'Malo',
        },
      ],
      playingField: {
        idCancha: 3,
        statusCancha: 'Regular',
      },
      updatePlayingField: jest.fn(),
      savePalyingField: jest.fn(),
    };
    componentWrapper = render(<PlayingFieldList {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('Deber tener un titulo', () => {
    const elem = componentWrapper.container;
    const tittle = elem.querySelectorAll('h1');

    expect(tittle[0].textContent).toMatch(/Lista de campos/i);
  });
});
