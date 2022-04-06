import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    color: #f8f566;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const DisplayWinnerAmount = styled.div`
    font-size: 2rem;
    text-align: center;
    color: ${props => (props.current == "X" ? '#b75dff' : '#f8f566')};
 `;
