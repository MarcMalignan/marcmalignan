import React, { FC } from 'react';
import { ISvgProps } from '../../../types';

const Svg: FC<ISvgProps> = ({ color }) => (
  <svg version="1.1" viewBox="0 0 362.8 512" xmlns="http://www.w3.org/2000/svg">
    <title>HTML5 Logo</title>
    <path d="m33.8 0h23v22.8h21.2v-22.8h23v69h-23v-23h-21v23h-23.2m97.6-46h-20.3v-23h63.7v23h-20.4v46h-23m53.5-69h24.1l14.8 24.3 14.8-24.3h24.1v69h-23v-34.2l-16.1 24.8-16.1-24.8v34.2h-22.6m89.2-69h23v46.2h32.6v22.8h-55.6" />
    <path d="m33 471-33-370.4h362.8l-33 370.2-148.7 41.2" fill={color} />
    <path d="m181.4 480.5v-349.5h148.3l-28.3 316" fill={color} />
    <path
      d="m67.4 176.3h114v45.4h-64.2l4.2 46.5h60v45.3h-101.6m2 22.8h45.6l3.2 36.3 50.8 13.6v47.4l-93.2-26"
      fill="#ebebeb"
    />
    <path
      d="m295 176.3h-113.8v45.4h109.6m-4.1 46.5h-105.5v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"
      fill="#fff"
    />
  </svg>
);

export default Svg;
