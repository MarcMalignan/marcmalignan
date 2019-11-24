import React, { FC } from 'react';
import { ParagraphInsert } from '../../components/commons';
import { Paragraphs } from '../../components/Paragraphs';
import { styled } from '../../style/theme';
import { Section } from '../Section';
import { experienceData, IExperience } from './experience.data';
import { ExperienceCard } from './ExperienceCard';

export const Experience: FC<{}> = () => (
  <Section id="experience">
    <Paragraphs translationKey="experience.text" />
    <ParagraphInsert>
      <Timeline>{experienceData.map(renderTimelineItem)}</Timeline>
    </ParagraphInsert>
  </Section>
);

const renderTimelineItem = (experience: IExperience, index: number) => (
  <ExperienceWrapper key={experience.id} isEvent={!experience.startDate}>
    <ExperienceCard experience={experience} index={index} />
  </ExperienceWrapper>
);

const Timeline = styled.div`
  position: relative;
  padding-top: ${({ theme }) => theme.spacings.medium};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: ${({ theme }) => theme.spacings.small};
    background: ${({ theme }) => theme.colors.accent2};
    transform: translateX(-50%);
  }

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    padding-top: 0;
  }
`;

const ExperienceWrapper = styled.div<{
  isEvent: boolean;
}>`
  display: flex;
  justify-content: ${({ isEvent }) => (isEvent ? 'center' : 'flex-start')};
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  &:nth-child(2n) {
    justify-content: ${({ isEvent }) => (isEvent ? 'center' : 'flex-end')};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
