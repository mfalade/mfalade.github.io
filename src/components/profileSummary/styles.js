import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: calc(100vh - ${({ theme }) => theme.dimension.navbar.height});
  align-items: center;
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};
`;

export const TextWrapper = styled.div`
  padding-left: 146px;
  z-index: ${({ theme }) => theme.zIndex.level1};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.lg};
  line-height: 48px;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const BgContainer = styled.div`
  position: absolute;
`;
