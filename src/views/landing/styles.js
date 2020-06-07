import styled from 'styled-components';

export const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.color.gray1};
  background-image: url(assets/images/noise.png);
  background-position: center;
  position: relative;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  overflow: hidden;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const GridContainer = styled.div`
  display: flex;
  svg {
    margin-right: 50px;
  }
`;
