import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { FormCrearTicket } from './';
import { setTextEvent } from 'app/shared/utils/test';
import '@testing-library/jest-dom/extend-expect'

describe('FormCrearProducto test', () => {
    let componentWrapper: RenderResult;
    let componentProps: React.ComponentProps<typeof FormCrearTicket> & {
        onSubmit: SinonStub;
    };

    beforeEach(() => {
        componentProps = {
            onSubmit: stub(),
            formTitle: 'Crear producto',
        };
        // componentWrapper = render(<FormCrearTicket {...componentProps}/>);
        // const component = render(<FormCrearTicket { ...componentProps } />)
        // console.log(component)


    });










});
