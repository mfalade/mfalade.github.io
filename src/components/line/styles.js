import styled, { keyframes } from 'styled-components';

const draw = keyframes`
  from {
    stroke-dashoffset: 2800;
  }

  to {
    stroke-dashoffset: 0;
  }
`;

export const ImageContainer = styled.div`
  svg path {
    stroke-dasharray: 2800;
    animation: ${draw} 2s linear forwards;
  }
`;
