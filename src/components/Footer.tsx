import React, { FC } from 'react';
import { styled } from '../style/theme';
import { ContentWidth } from './commons';

export const Footer: FC<{}> = () => (
  <FooterContainer>
    <ContentWidth>Marc Malignan © 2019</ContentWidth>
  </FooterContainer>
);

const FooterContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.large} 0;
  font-size: 0.8em;
  text-align: center;
  box-shadow: ${({ theme }) =>
    `0 0 ${theme.spacings.large} ${theme.colors.shadow}`};
`;
