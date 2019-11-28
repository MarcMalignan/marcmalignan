import React, { FC } from 'react';
import { styled } from '../../style/theme';

interface ILogoProps {
  isSmall?: boolean;
  link: string;
  logo: string;
  name: string;
}

export const Logo: FC<ILogoProps> = ({ isSmall, link, logo, name }) => {
  const LogoSvg = require(`./svg/${logo}.tsx`).default;

  return (
    <LogoLink href={link} target="_blank">
      <LogoContainer title={name} isSmall={isSmall}>
        <LogoSvg color={process.env.THEME} />
      </LogoContainer>
    </LogoLink>
  );
};

const LogoLink = styled.a`
  display: block;
  margin: 0 ${({ theme }) => theme.spacings.small};
`;

/* eslint-disable @typescript-eslint/indent */
const LogoContainer = styled.div<{ isSmall?: boolean }>`
  display: block;
  height: ${({ isSmall, theme }) =>
    isSmall ? theme.iconSizes.small : theme.iconSizes.large};

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    height: ${({ isSmall, theme }) =>
      isSmall ? theme.iconSizes.small : theme.iconSizes.medium};
  }

  svg {
    height: inherit;
    width: auto;
  }
`;
