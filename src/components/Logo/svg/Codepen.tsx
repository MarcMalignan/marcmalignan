import React, { FC } from 'react';
import { ISvgProps } from '../../../types';

const Svg: FC<ISvgProps> = ({ colors: { font } }) => (
  <svg
    fill="none"
    stroke={font}
    strokeWidth="2.3"
    version="1.1"
    viewBox="0 0 24.327 24.333"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m1.1637 15.866 11 7.3 11-7.3v-7.4l-11-7.3-11 7.3zm22 0-11-7.4-11 7.4m0-7.4 11 7.3 11-7.3m-11-7.3v7.3m0 7.4v7.3" />
  </svg>
);

export default Svg;
