import React, { FC } from 'react';
import styled from 'styled-components';

export const Header: FC<{}> = () => <MainTitle>Marc Malignan</MainTitle>;

const MainTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 2.5em;
`;
