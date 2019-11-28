import React, { FC, Fragment } from 'react';
import { ParagraphInsert } from '../../components/commons';
import { Logo } from '../../components/Logo';
import { Paragraphs } from '../../components/Paragraphs';
import { styled } from '../../style/theme';
import { Section } from '../Section';
import { ISkill, ISkillGroup, skillsData } from './skills.data';

export const Skills: FC<{}> = () => (
  <Section id="skills">
    <Paragraphs translationKey="skills.intro" />
    {skillsData.map(renderSkillGroup)}
  </Section>
);

const renderSkillGroup = ({ id, mainRow, otherRow }: ISkillGroup) => (
  <Fragment key={id}>
    <Paragraphs translationKey={`skills.${id}`} />
    <ParagraphInsert>
      {mainRow.length > 0 ? (
        <SkillsRow>{mainRow.map(renderSkill())}</SkillsRow>
      ) : null}
      {otherRow.length > 0 ? (
        <SkillsRow>{otherRow.map(renderSkill(true))}</SkillsRow>
      ) : null}
    </ParagraphInsert>
  </Fragment>
);

const renderSkill = (isSmall?: boolean) => ({ link, logo, name }: ISkill) => (
  <Logo key={name} isSmall={isSmall} link={link} logo={logo} name={name} />
);

const SkillsRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;
