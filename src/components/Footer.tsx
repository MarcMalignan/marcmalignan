import React, { FC } from 'react';
import { styled } from '../style/theme';
import { ContentWidth } from './commons';

export const Footer: FC<{}> = () => (
  <FooterContainer>Marc Malignan © 2019</FooterContainer>
);

const FooterContainer = styled(ContentWidth)`
  font-size: 0.8em;
  text-align: center;
  padding: ${({ theme }) => theme.spacings.medium} 0 !important;
`;
