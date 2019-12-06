import React, { FC, useCallback, useState } from 'react';
import { styled } from '../../style/theme';
import { Language } from './Language';
import { Nav } from './Nav';

interface IBurgerMenuProps {
  className?: string;
}

export const BurgerMenu: FC<IBurgerMenuProps> = ({ className }) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return (
    <BurgerMenuContainer className={className}>
      <BurgerButton onClick={toggle}>
        <BurgerButtonLine isOpen={isOpen} />
      </BurgerButton>
      <Menu isOpen={isOpen} onClick={toggle}>
        <Nav />
        <StyledLanguage />
      </Menu>
    </BurgerMenuContainer>
  );
};

const BURGER_BUTTON_SIZE = 40;
const BURGER_LINE_SPACING = BURGER_BUTTON_SIZE / 5;

const BurgerMenuContainer = styled.div``;

const BurgerButton = styled.div`
  position: relative;
  width: ${BURGER_BUTTON_SIZE}px;
  height: ${BURGER_BUTTON_SIZE}px;
  background: ${({ theme }) => theme.colors.accent};
`;

const BurgerButtonLine = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.spacings.tiny};
  right: ${({ theme }) => theme.spacings.tiny};
  display: block;
  height: ${({ theme }) => theme.spacings.line};
  background: ${({ theme }) => theme.colors.background};
  transition: all ${({ theme }) => theme.speeds.fast};
  transform: translateY(-50%)
    rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: inherit;
    background: inherit;
    transition: inherit;
    transform: rotate(${({ isOpen }) => (isOpen ? '-90deg' : '0')});
  }

  &:before {
    top: ${({ isOpen }) => (isOpen ? '0' : `-${BURGER_LINE_SPACING}px`)};
  }

  &:after {
    top: ${({ isOpen }) => (isOpen ? '0' : `${BURGER_LINE_SPACING}px`)};
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.spacings.tiny};
  left: ${({ theme }) => theme.spacings.tiny};
  right: ${({ theme }) => theme.spacings.tiny};
  bottom: ${({ theme }) => theme.spacings.tiny};
  margin-top: ${({ theme }) => theme.spacings.large};
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  pointer-events: ${({ isOpen }) => (isOpen ? 'initial' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.speeds.fast};
`;

const StyledLanguage = styled(Language)`
  justify-content: center;
`;
