import styled, { keyframes } from 'styled-components';
import { ChevronDown } from '@styled-icons/boxicons-solid';

const slideNFade = keyframes`
  0% {
    transform: translateY(-20px) scale(0.5);
    opacity: 0;
  }

  45%, 65%{
    transform: translateY(0) scale(1);
    opacity: 1.5;
  }

  100% {
    transform: translateY(20px) scale(0.5);
    opacity: 0;
  }
`;

export const IconContainer = styled.button`
  outline: none;
  border: none;
  background: none;
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledIcon = styled(ChevronDown)`
  position: absolute;
  bottom: 0;
  height: ${({ theme }) => theme.icon.lg};
  width: ${({ theme }) => theme.icon.lg};
  display: block;
  opacity: 0;
  animation: ${slideNFade} 2s linear infinite;
  animation-delay: ${({ animationDelay }) => animationDelay}s;
`;
