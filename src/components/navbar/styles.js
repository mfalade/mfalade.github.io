import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.md};
`;

export const StyledNav = styled.ul`
  display: flex;
  align-items: center;

  li {
    display: inline-flex;
    margin-left: ${({ theme }) => theme.spacing.md};
  }
`;

export const StyledImage = styled.img`
  height: 70px;
`;
