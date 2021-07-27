import styled from 'styled-components';

export const TicketCard = styled.div`
  background: #FFF;
  width: 66vmin;
  height: 60vmin;
  margin: 2vmin;
  border-radius: 1vmin;
  box-shadow: 1px 2px 11px -7px black;
  border: solid;
    border-color: #EEE;
    border-width: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;


export const DivData = styled.div`
    width: 80%;
    // background: red;
    display: flex;
    // justify-content: center;
    text-align: left;
`;


export const DivHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

`;

export const H3Lineal = styled.h3`
    font-weight: 300;
    margin-left: 2vmin;

`;

export const ImgTicket = styled.img`
    width: 6vmin; height: 6vmin;

`;


export const LinearTicket = styled.h5`
    margin: 2px;
    color: lightgray;


`;
