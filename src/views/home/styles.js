import styled from 'styled-components';

export const StyledSection = styled.section`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.color.gray1};
  background-image: url(assets/images/noise.png),
    url(https://www.dennissnellenberg.nl/assets/img/line-nav.svg);
  background-position: center, center;

  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
