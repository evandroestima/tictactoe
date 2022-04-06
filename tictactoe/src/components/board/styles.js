import styled from 'styled-components';

export const BoardStyle = styled.div`
  border: 1rem solid #f8f566;
  background: #f8f566;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 1rem;
  `;