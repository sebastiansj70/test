import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Tittles } from './styles';


interface TittleProps {
    msg: string;
}

export const Tittle: React.FC<TittleProps> = ({ msg }) => <Tittles>{msg}</Tittles>;


Tittle.propTypes = {
    msg: PropTypes.string.isRequired
};