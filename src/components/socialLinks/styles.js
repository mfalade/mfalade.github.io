import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 200px;

  ${StyledIconBase} {
    height: 24px;
    width: 24px;
  }
`;

export const StyledLink = styled.a``;
