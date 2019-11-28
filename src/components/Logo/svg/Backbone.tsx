import React, { FC } from 'react';
import { ISvgProps } from '../../../types';

const Svg: FC<ISvgProps> = ({ color }) => (
  <svg
    version="1.1"
    viewBox="0 0 129.37 160.77"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(129.46 -1148.8)">
      <g
        transform="matrix(.17893 0 0 .17893 -129.37 1149)"
        fill="#fff"
        fillRule="evenodd"
      >
        <g stroke="#222">
          <path
            d="m0 0v485l361 205.79v-139.88l-241.5-137.67v-216.24l241.5 137.67v-128.88z"
            fill="#222"
          />
          <path
            d="m722 0v485l-361 205.79v-139.88l241.5-137.67v-216.24l-241.5 137.67v-128.88z"
            fill={color}
          />
          <path
            d="m0 896.79v-485l361-205.79v139.88l-241.5 137.67v205.24l241.5-137.67v139.88z"
            fill={color}
          />
          <path
            d="m722 896.79v-485l-361-205.79v139.88l241.5 137.67v205.24l-241.5-137.67v139.88z"
            fill="#222"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default Svg;
