import styled from 'styled-components';

export const Button = styled.button`
 background: #272727;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  outline: none;
    color: ${props => (props.current == "X" ? '#b75dff' : '#f8f566')};
`