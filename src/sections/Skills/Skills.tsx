import React, { FC, useCallback } from 'react';
import { Paragraphs } from '../../components/Paragraphs';
import { styled } from '../../style/theme';
import { Section } from '../Section';
import { Skill } from './Skill';
import { skillsData } from './skills.data';
import { ISkill, ISkillGroup } from './skills.types';

export const Skills: FC<{}> = () => {
  const renderSkillGroup = useCallback(
    ({ id, mainRow, otherRow }: ISkillGroup) => (
      <>
        <Paragraphs translationKey={`skills.${id}`} />
        <SkillsRowsContainer>
          {mainRow.length > 0 ? (
            <SkillsRow>{mainRow.map(renderSkill())}</SkillsRow>
          ) : null}
          {otherRow.length > 0 ? (
            <SkillsRow>{otherRow.map(renderSkill(true))}</SkillsRow>
          ) : null}
        </SkillsRowsContainer>
      </>
    ),
    [],
  );

  return (
    <Section id="skills">
      <Paragraphs translationKey="skills.intro" />
      {skillsData.skills.map(renderSkillGroup)}
    </Section>
  );
};

const renderSkill = (isSmall?: boolean) => (skill: ISkill) => (
  <Skill skill={skill} isSmall={isSmall} />
);

const SkillsRowsContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.small} 0;
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;

const SkillsRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;
