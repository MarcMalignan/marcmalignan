import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { ParagraphInsert } from '../../components/commons';
import { Logo } from '../../components/Logo';
import { Paragraphs } from '../../components/Paragraphs';
import { styled } from '../../style/theme';
import { Section } from '../Section';

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
          <StyledIcon icon={faEnvelope} />
        </MailLink>
      </LinksContainer>
      <LinksContainer>
        <Logo
          name="Linkedin"
          logo="Linkedin"
          link="https://www.linkedin.com/in/marc-malignan-b3522b80/"
        />
        <Logo
          name="GitHub"
          logo="Github"
          link="https://github.com/MarcMalignan"
        />
        <Logo
          name="Codepen"
          logo="Codepen"
          link="https://codepen.io/MarcMalignan"
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
  color: ${({ theme }) => theme.colors.accent};
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.iconSizes.huge};
`;
