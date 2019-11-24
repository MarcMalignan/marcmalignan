import React, { FC } from 'react';
import { styled } from '../style/theme';

interface ILogoProps {
  isSmall?: boolean;
  link: string;
  logo: string;
  name: string;
}

export const Logo: FC<ILogoProps> = ({ isSmall, link, logo, name }) => {
  const logoSrc = require(`../../public/images/logos/${logo}`);

  return (
    <LogoLink href={link} target="_blank">
      <LogoImg alt={name} title={name} src={logoSrc} isSmall={isSmall} />
    </LogoLink>
  );
};

const LogoLink = styled.a`
  display: block;
  margin: 0 ${({ theme }) => theme.spacings.small};
`;

/* eslint-disable @typescript-eslint/indent */
export const LogoImg = styled.img<{ isSmall?: boolean }>`
  display: block;
  height: ${({ isSmall, theme }) =>
    isSmall ? theme.iconSizes.small : theme.iconSizes.large};

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    height: ${({ isSmall, theme }) =>
      isSmall ? theme.iconSizes.small : theme.iconSizes.medium};
  }
`;
