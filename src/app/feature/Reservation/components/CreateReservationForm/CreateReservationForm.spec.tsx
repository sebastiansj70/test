import '@testing-library/jest-dom'
import React from "react";
import { RenderResult, render } from "@testing-library/react";
import { CreateReservationForm } from "./index";
import { SinonStub, stub } from "sinon";
import { any } from 'prop-types';

describe('CreateReservationForm ', () => {
    let componentWrapper: RenderResult;
    let componentProps: React.ComponentProps<typeof CreateReservationForm> & {
        onSubmit: SinonStub;
    };

    beforeEach(() => {
        componentProps = {
            onSubmit: stub(),
            formTitle: 'Form Tittle',
            handleReservationList: jest.fn(),
        };
        componentWrapper = render(<CreateReservationForm  {...componentProps} />);
        console.log(componentWrapper, 'componentWrapper')
    });




});
