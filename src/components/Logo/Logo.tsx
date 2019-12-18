import React, { FC } from 'react';
import { withTheme } from 'styled-components';
import { styled } from '../../style/styled';
import { IAppTheme } from '../../style/themes/types';

interface ILogoProps {
  isSmall?: boolean;
  link: string;
  logo: string;
  name: string;
  theme: IAppTheme;
}

const BareLogo: FC<ILogoProps> = ({ isSmall, link, logo, name, theme }) => {
  const LogoSvg = require(`./svg/${logo}.tsx`).default;

  return (
    <LogoLink href={link} target="_blank">
      <LogoContainer title={name} isSmall={isSmall}>
        <LogoSvg colors={theme.colors} />
      </LogoContainer>
    </LogoLink>
  );
};

export const Logo = withTheme(BareLogo);

const LogoLink = styled.a`
  display: inline-block;
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
