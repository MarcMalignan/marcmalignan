import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { IAppTheme } from './themes/types';

export const styled = baseStyled as ThemedStyledInterface<IAppTheme>;
