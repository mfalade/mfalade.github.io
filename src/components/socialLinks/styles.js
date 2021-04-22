import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 248px;

  ${StyledIconBase} {
    height: ${({ theme }) => theme.icon.md};
    width: ${({ theme }) => theme.icon.md};
  }
`;

export const StyledLink = styled.a``;
