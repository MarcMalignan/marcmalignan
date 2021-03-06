import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { formatDateStartEnd } from '../../helpers/date';
import { styled } from '../../style/styled';
import { IExperience } from './experience.data';

interface IExperienceCardProps {
  experience: IExperience;
  index: number;
}

export const ExperienceCard: FC<IExperienceCardProps> = ({
  experience,
  index,
}) => {
  const { t } = useTranslation();
  const {
    id,
    title,
    subtitle,
    link,
    techTags,
    contextTags,
    startDate,
    endDate,
  } = experience;

  const isEvent = !startDate;
  const description = t(`experience.descriptions.${id}`);

  return (
    <ExperienceCardContainer isEvent={isEvent}>
      {startDate ? (
        <ExperienceDateDesktop>
          {formatDateStartEnd(startDate, endDate)}
        </ExperienceDateDesktop>
      ) : null}
      <ExperienceCardHeader
        href={link}
        target="__blank"
        isEvent={isEvent}
        isRight={index % 2 === 0}
      >
        <ExperienceTitle>{title}</ExperienceTitle>
        {subtitle ? <ExperienceSubtitle>{subtitle}</ExperienceSubtitle> : null}
        {startDate ? (
          <ExperienceDateMobile>
            {formatDateStartEnd(startDate, endDate)}
          </ExperienceDateMobile>
        ) : null}
      </ExperienceCardHeader>
      {!isEvent ? (
        <ExperienceCardBody>
          <ExperienceDescription>{description}</ExperienceDescription>
          <ExperienceTags>
            {techTags.map(renderTechTags)}
            {contextTags.map(renderContextTags)}
          </ExperienceTags>
        </ExperienceCardBody>
      ) : null}
    </ExperienceCardContainer>
  );
};

const renderTechTags = (label: string, index: number) => (
  <TechTag key={index}>{label}</TechTag>
);

const renderContextTags = (label: string, index: number) => {
  const { t } = useTranslation();

  return (
    <ContextTag key={index}>{t(`experience.context.${label}`)}</ContextTag>
  );
};

const CARD_MAX_WIDTH = 500;

const ExperienceCardContainer = styled.div<{
  isEvent: boolean;
}>`
  position: relative;
  width: ${({ isEvent, theme }) =>
    isEvent ? 'auto' : `calc(50% - ${theme.spacings.medium})`};
  max-width: ${CARD_MAX_WIDTH}px;
  text-align: center;
  box-shadow: ${({ isEvent, theme }) =>
    isEvent ? 'none' : `0 0 ${theme.spacings.medium} ${theme.colors.shadow}`};

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    width: ${({ isEvent }) => (isEvent ? 'auto' : '100%')};
  }
`;

const ExperienceCardHeader = styled.a<{
  isEvent: boolean;
  isRight: boolean;
}>`
  position: relative;
  display: block;
  padding: ${({ theme }) => `${theme.spacings.small} ${theme.spacings.medium}`};
  background: ${({ isEvent, theme }) =>
    isEvent ? theme.colors.accent2 : theme.colors.accent};
  color: ${({ isEvent, theme }) =>
    isEvent ? theme.colors.font : theme.colors.fontAccent};
  font-family: ${({ theme }) => theme.fonts.title};
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    padding: ${({ theme }) => theme.spacings.small};
  }

  &:before {
    content: '';
    display: ${({ isEvent }) => (isEvent ? 'none' : 'block')};
    position: absolute;
    top: 50%;
    left: ${({ isRight }) => (isRight ? 'initial' : 0)};
    right: ${({ isRight }) => (isRight ? 0 : 'initial')};
    width: ${({ theme }) => theme.spacings.small};
    height: ${({ theme }) => theme.spacings.small};
    background: inherit;
    transform-origin: center;
    transform: translate(${({ isRight }) => (isRight ? 50 : -50)}%, -50%)
      rotate(45deg);

    @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
      display: none;
    }
  }
`;

const ExperienceDate = styled.div`
  font-size: 0.8em;
`;

const ExperienceDateDesktop = styled(ExperienceDate)`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.spacings.medium};

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: none;
  }
`;

const ExperienceDateMobile = styled(ExperienceDate)`
  display: none;
  margin-top: ${({ theme }) => theme.spacings.small};
  font-family: ${({ theme }) => theme.fonts.text};

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: block;
  }
`;

const ExperienceCardBody = styled.div`
  padding: ${({ theme }) => theme.spacings.small};
  background: ${({ theme }) => theme.colors.background};
`;

const ExperienceTitle = styled.div`
  font-size: 1.8em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ExperienceSubtitle = styled.div`
  font-size: 1.2em;
`;

const ExperienceDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;

const ExperienceTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${({ theme }) =>
    `0 -${theme.spacings.tiny} -${theme.spacings.tiny} 0`};
`;

const Tag = styled.div`
  margin: ${({ theme }) => `0 ${theme.spacings.tiny} ${theme.spacings.tiny} 0`};
  padding: ${({ theme }) => `${theme.spacings.tiny} ${theme.spacings.small}`};
  font-size: 0.8em;
  white-space: nowrap;
`;

const TechTag = styled(Tag)`
  background: ${({ theme }) => theme.colors.accent3};
  color: ${({ theme }) => theme.colors.fontAccent3};

  &:before {
    content: '# ';
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ContextTag = styled(Tag)`
  background: ${({ theme }) => theme.colors.accent2};
  color: ${({ theme }) => theme.colors.fontAccent2};

  &:before {
    content: '# ';
    color: ${({ theme }) => theme.colors.accent};
  }
`;
