import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { FormCrearTicket } from './';
import { setTextEvent } from 'app/shared/utils/test';

describe('FormCrearProducto test', () => {
    let componentWrapper: RenderResult;
    let componentProps: React.ComponentProps<typeof FormCrearTicket> & {
        onSubmit: SinonStub,
        handleListTicket: SinonStub;
    };

    beforeEach(() => {
        componentProps = {
            onSubmit: stub(),
            formTitle: 'Crear producto',
            handleListTicket: stub(),
        };
        componentWrapper = render(<FormCrearTicket { ...componentProps } />);
        // const component = render(<FormCrearTicket { ...componentProps } />)
        // console.log(component)


    });










});
