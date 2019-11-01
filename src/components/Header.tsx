import React, { FC } from 'react';
import { styled } from '../style/theme';
import { ContentWidth } from './commons';

export const Header: FC<{}> = () => (
  <HeaderContainer>
    <ContentWidth>
      <TitleContainer>
        <Title>
          <i>M</i>
          arc
          <br />
          <i>M</i>
          alignan
        </Title>
      </TitleContainer>
      <Nav>
        <NavItem>Compétences</NavItem>
        <NavItem>Expérience</NavItem>
        <NavItem>Contact</NavItem>
      </Nav>
    </ContentWidth>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  box-shadow: ${({ theme }) => `0 0 ${theme.spacings.large} ${theme.colors.shadow}`};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0;
  padding: ${({ theme }) => theme.spacings.large};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  font-size: 5em;
  line-height: 0.9em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  i {
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const NavItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: ${({ theme }) => theme.spacings.medium};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  font-size: 2em;
  text-align: center;
  cursor: pointer;
  transition: color ${({ theme }) => theme.speeds.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
