import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 54vmin;
  &[disabled] {
    opacity: 0.3;
  }
`;
