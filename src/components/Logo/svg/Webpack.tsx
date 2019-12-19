import React, { FC } from 'react';
import { ISvgProps } from '../../../types';

const Svg: FC<ISvgProps> = ({ colors: { accent, background, font } }) => (
  <svg version="1.1" viewBox="0 0 774 875.7" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m387 0 387 218.9v437.9l-387 218.9-387-218.9v-437.9z"
      fill={background}
    />
    <path
      d="m373 61.5-312.9 177 110.8 64.1 1.5996-0.90039 200.5-110.3v-129.9zm26.801 0v129.9l200.5 110.2 1.5996 0.90039 110.8-64-312.9-177zm-352.8 200.4v360.9l111.6-64.4v-232l-111.6-64.5zm678.8 0-111.6 64.5v232l111.6 64.4v-360.9zm-543 313.4-114.9 66.398 305.1 172.6v-134.4l-190.2-104.6zm407.1 0-190.1 104.6v134.4l305.1-172.6-115-66.398z"
      fill={accent}
    />
    <path
      d="m373 649.3-187.6-103.2v-204.3l187.6 108.3zm26.8 0 187.6-103.1v-204.4l-187.6 108.3zm-13.4-207m-188.3-124.1 188.3-103.5 188.3 103.5-188.3 108.7z"
      fill={font}
    />
  </svg>
);

export default Svg;
