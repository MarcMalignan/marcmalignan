import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Paragraph, ParagraphInsert } from '../components/commons';
import { Logo } from '../components/Logo';
import { styled } from '../style/theme';
import { Section } from './Section';

export const Contact: FC<{}> = () => (
  <Section id="contact">
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
    <ParagraphInsert>
      <LinksContainer>
        <MailLink href="mailto:contact@marcmalignan.com" target="__blank">
          <FontAwesomeIcon icon={faEnvelopeOpenText} size="7x" />
        </MailLink>
      </LinksContainer>
      <LinksContainer>
        <Logo
          name="GitHub"
          logo="github.svg"
          link="https://github.com/MarcMalignan"
          isSmall
        />
        <Logo
          name="Codepen"
          logo="codepen.svg"
          link="https://codepen.io/MarcMalignan"
          isSmall
        />
      </LinksContainer>
    </ParagraphInsert>
  </Section>
);

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;

const MailLink = styled.a`
  color: ${({ theme }) => theme.colors.fontPrimary};
`;
