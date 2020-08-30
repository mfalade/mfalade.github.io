import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  // transform: translateX(-61%);
  justify-content: space-between;

  svg {
    height: 100vh;
  }

  div {
    height: 100vh;
    border-right: 0.1rem solid rgba(255, 255, 255, 0.05);
  }
`;
