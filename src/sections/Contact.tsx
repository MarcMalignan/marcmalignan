import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { ParagraphInsert } from '../components/commons';
import { Logo } from '../components/Logo';
import { Paragraphs } from '../components/Paragraphs';
import { styled } from '../style/theme';
import { Section } from './Section';

export const Contact: FC<{}> = () => (
  <Section id="contact">
    <Paragraphs translationKey="contact.text" />
    <ParagraphInsert>
      <LinksContainer>
        <MailLink
          title="Email"
          href="mailto:contact@marcmalignan.com"
          target="__blank"
        >
          <FontAwesomeIcon icon={faEnvelope} size="7x" />
        </MailLink>
      </LinksContainer>
      <LinksContainer>
        <Logo
          name="Linkedin"
          logo="linkedin.svg"
          link="https://www.linkedin.com/in/marc-malignan-b3522b80/"
        />
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
