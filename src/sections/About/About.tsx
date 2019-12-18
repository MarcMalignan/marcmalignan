import { faDesktop } from '@fortawesome/free-solid-svg-icons/faDesktop';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt';
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons/faTabletAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { ParagraphInsert } from '../../components/commons';
import { Paragraphs } from '../../components/Paragraphs';
import { styled } from '../../style/styled';
import { Section } from '../Section';

export const About: FC<{}> = () => (
  <Section id="about">
    <Paragraphs translationKey="about.intro" />
    <DevicesContainer>
      <DevicePhone icon={faMobileAlt} size="5x" />
      <DeviceTablet icon={faTabletAlt} size="7x" />
      <DeviceDesktop icon={faDesktop} size="9x" />
    </DevicesContainer>
    <Paragraphs translationKey="about.text" />
  </Section>
);

const DevicesContainer = styled(ParagraphInsert)`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const Device = styled(FontAwesomeIcon)`
  margin: 0 ${({ theme }) => theme.spacings.medium};

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    margin: 0 ${({ theme }) => theme.spacings.small};
  }
`;

const DevicePhone = styled(Device)`
  font-size: ${({ theme }) => theme.iconSizes.medium};
`;
const DeviceTablet = styled(Device)`
  font-size: ${({ theme }) => theme.iconSizes.large};
`;
const DeviceDesktop = styled(Device)`
  font-size: ${({ theme }) => theme.iconSizes.huge};
`;
