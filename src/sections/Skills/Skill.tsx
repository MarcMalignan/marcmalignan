import React, { FC } from 'react';
import { styled } from '../../style/theme';
import { ISkill } from './skills.data';

interface ISkillProps {
  isSmall?: boolean;
  skill: ISkill;
}

export const Skill: FC<ISkillProps> = ({ skill, isSmall }) => {
  const { link, logo, name } = skill;
  const logoSrc = require(`../../../public/images/logos/${logo}`);

  return (
    <SkillContainer href={link} target="_blank">
      <SkillLogo alt={name} title={name} src={logoSrc} isSmall={isSmall} />
    </SkillContainer>
  );
};

const SkillContainer = styled.a`
  margin: 0 ${({ theme }) => theme.spacings.small};
`;

const SkillLogo = styled.img<{ isSmall: boolean }>`
  display: block;
  height: ${({ isSmall }) => (isSmall ? 40 : 80)}px;
`;
