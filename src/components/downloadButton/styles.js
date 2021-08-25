import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: 50%;
  height: 52px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 52px;
    background: ${({ btnColor }) => btnColor};
    left: 0;
    top: 0;
    border-radius: 52px;
    z-index: ${({ theme }) => theme.zIndex.level0};
    transition: width 200ms ease-in-out 200ms;
  }

  :hover {
    &:before {
      width: calc(100% + 52px + 16px);
      transition: width 100ms ease-out;
    }
  }
`;

export const IconContainer = styled.span`
  position: relative;
  left: 8px;
  z-index: ${({ theme }) => theme.zIndex.level1};
`;

export const LabelContainer = styled.span`
  z-index: ${({ theme }) => theme.zIndex.level1};
  position: relative;
  left: 46px;
  font-weight: bold;
`;
