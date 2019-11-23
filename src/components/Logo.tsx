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

export const LogoImg = styled.img<{ isSmall?: boolean }>`
  display: block;
  height: ${({ isSmall }) => (isSmall ? 40 : 80)}px;
`;
