import React, { FC } from 'react';
import { styled } from '../../style/theme';
import { Section } from '../Section';
import { experienceData, IExperience } from './experience.data';
import { ExperienceCard } from './ExperienceCard';

export const Experience: FC<{}> = () => (
  <Section id="experience">
    <Timeline>{experienceData.map(renderTimelineItem)}</Timeline>
  </Section>
);

const renderTimelineItem = (experience: IExperience, index: number) => (
  <ExperienceWrapper key={experience.id} isEvent={!experience.startDate}>
    <ExperienceCard experience={experience} index={index} />
  </ExperienceWrapper>
);

const Timeline = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    height: 100%;
    width: ${({ theme }) => theme.spacings.small};
    background: ${({ theme }) => theme.colors.accent2};
    transform: translateX(-50%);
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
