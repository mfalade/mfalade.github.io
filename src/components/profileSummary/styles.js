import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: calc(100vh - ${({ theme }) => theme.dimension.navbar.height});
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: 50px;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Description = styled.p`
  font-size: 20px;
`;
