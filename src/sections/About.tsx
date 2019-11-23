import {
  faDesktop,
  faMobileAlt,
  faTabletAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Paragraph, ParagraphInsert } from '../components/commons';
import { styled } from '../style/theme';
import { Section } from './Section';

export const About: FC<{}> = () => (
  <Section id="about">
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
      sollicitudin vel ante sit amet viverra. Aenean sed est vitae odio lobortis
      posuere. Fusce ut dignissim velit. Etiam et mattis arcu. Maecenas faucibus
      eros pretium ipsum ullamcorper viverra. Suspendisse consectetur turpis in
      massa varius, in hendrerit leo gravida. Nulla facilisi.
    </Paragraph>
    <Paragraph>
      Morbi sed ligula fringilla, pulvinar sapien in, venenatis tortor. Mauris
      vel tellus a ex fermentum volutpat at quis diam. Suspendisse quam metus,
      malesuada quis vestibulum eu, tincidunt facilisis metus. Pellentesque
      ullamcorper, nulla vitae blandit vulputate, est nibh rutrum nulla,
      placerat vehicula magna leo sit amet diam. In commodo nulla sed mauris
      dignissim convallis. Aliquam mattis sapien vel urna cursus vestibulum.
      Nulla tempor leo risus, eget pharetra ex molestie non. Nulla condimentum
      dolor ut mollis eleifend. Praesent faucibus finibus ante eu tincidunt.
      Fusce faucibus, libero sit amet gravida varius, justo odio luctus mauris,
      sed mattis mauris dolor ut purus. Pellentesque at arcu vulputate, pretium
      ante luctus, eleifend nunc. Mauris lacinia nunc dolor, a eleifend odio
      molestie fermentum.
    </Paragraph>
    <DevicesContainer>
      <Device icon={faMobileAlt} size="5x" />
      <Device icon={faTabletAlt} size="7x" />
      <Device icon={faDesktop} size="9x" />
    </DevicesContainer>
  </Section>
);

const DevicesContainer = styled(ParagraphInsert)`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const Device = styled(FontAwesomeIcon)`
  margin: 0 ${({ theme }) => theme.spacings.medium};
`;
