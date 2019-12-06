import React, { FC } from 'react';
import { ISvgProps } from '../../../types';

const Svg: FC<ISvgProps> = ({ color }) => (
  <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        d="M128,0 C57.3281853,0 0,57.3281853 0,128 C0,198.671815 57.3281853,256 128,256 C198.671815,256 256,198.671815 256,128 C256,57.3281853 198.671815,0 128,0"
        fill={color}
      />
      <path
        d="M203.317375,174.060232 C195.410039,175.938224 191.40695,177.667954 181.621622,184.043243 C166.350579,193.927413 149.646332,198.523552 149.646332,198.523552 C149.646332,198.523552 148.262548,200.599228 144.259459,201.538224 C137.340541,203.218533 111.295753,204.651737 108.923552,204.701158 C102.548263,204.750579 98.6440154,203.07027 97.5567568,200.450965 C94.2455598,192.543629 102.301158,189.08417 102.301158,189.08417 C102.301158,189.08417 100.522008,187.996911 99.4841699,187.008494 C98.5451737,186.069498 97.5567568,184.191506 97.2602317,184.883398 C96.0247104,187.898069 95.3822394,195.261776 92.0710425,198.572973 C87.5243243,203.169112 78.9250965,201.637066 73.834749,198.96834 C68.2501931,196.003089 74.2301158,189.034749 74.2301158,189.034749 C74.2301158,189.034749 71.215444,190.8139 68.7938224,187.156757 C66.619305,183.796139 64.5930502,178.06332 65.1366795,170.996139 C65.7297297,162.940541 74.7243243,155.132046 74.7243243,155.132046 C74.7243243,155.132046 73.1428571,143.221622 78.3320463,131.014672 C83.027027,119.894981 95.6787645,110.949807 95.6787645,110.949807 C95.6787645,110.949807 85.0532819,99.1876448 89.0069498,88.611583 C91.576834,81.6926641 92.6146718,81.7420849 93.4548263,81.4455598 C96.4200772,80.3088803 99.2864865,79.0733591 101.411583,76.7505792 C112.037066,65.2849421 125.578378,67.4594595 125.578378,67.4594595 C125.578378,67.4594595 132.003089,47.9382239 137.933591,51.7436293 C139.762162,52.9297297 146.335135,67.5583012 146.335135,67.5583012 C146.335135,67.5583012 153.352896,63.4563707 154.143629,64.988417 C158.393822,73.2416988 158.888031,89.0069498 157.010039,98.5945946 C153.847104,114.409266 145.939768,122.909653 142.776834,128.247104 C142.035521,129.482625 151.27722,133.386873 157.10888,149.54749 C162.495753,164.324324 157.701931,176.728958 158.542085,178.112741 C158.690347,178.359846 158.739768,178.458687 158.739768,178.458687 C158.739768,178.458687 164.917375,178.952896 177.322008,171.292664 C183.944402,167.190734 191.802317,162.594595 200.74749,162.495753 C209.396139,162.34749 209.840927,172.478764 203.317375,174.060232 L203.317375,174.060232 Z M215.079537,166.795367 C214.189961,159.777606 208.259459,154.934363 200.648649,155.033205 C189.281853,155.181467 179.743629,161.062548 173.417761,164.966795 C170.946718,166.498842 168.821622,167.635521 166.99305,168.475676 C167.388417,162.742857 167.042471,155.230888 164.07722,146.977606 C160.469498,137.093436 155.626255,131.014672 152.166795,127.505792 C156.169884,121.674131 161.655598,113.173745 164.225483,100.027799 C166.449421,88.8092664 165.757529,71.3637066 160.667181,61.5783784 C159.629344,59.6015444 157.899614,58.1683398 155.725097,57.5752896 C154.835521,57.3281853 153.155212,56.8339768 149.844015,57.772973 C144.85251,47.4440154 143.12278,46.3567568 141.788417,45.4671815 C139.020849,43.6880309 135.759073,43.2926641 132.694981,44.4293436 C128.59305,45.9119691 125.08417,49.8656371 121.772973,56.8833977 C121.278764,57.9212355 120.833977,58.9096525 120.43861,59.8980695 C114.162162,60.3428571 104.277992,62.6162162 95.9258687,71.6602317 C94.8880309,72.7969112 92.8617761,73.6370656 90.7366795,74.4277992 L90.7861004,74.4277992 C86.4370656,75.9598456 84.4602317,79.5181467 82.03861,85.9428571 C78.6779923,94.9374517 82.1374517,103.783784 85.5474903,109.516602 C80.9019305,113.667954 74.7243243,120.290347 71.4625483,128.049421 C67.4100386,137.637066 66.965251,147.027027 67.1135135,152.117375 C63.6540541,155.774517 58.3166023,162.644015 57.7235521,170.353668 C56.9328185,181.127413 60.8370656,188.441699 62.5667954,191.110425 C63.0610039,191.901158 63.6046332,192.543629 64.1976834,193.1861 C64,194.520463 63.9505792,195.953668 64.2471042,197.436293 C64.8895753,200.895753 67.0640927,203.712741 70.3752896,205.491892 C76.8988417,208.951351 85.992278,210.433977 93.0100386,206.925097 C95.5305019,209.593822 100.126641,212.163707 108.478764,212.163707 L108.972973,212.163707 C111.098069,212.163707 138.081853,210.730502 145.939768,208.803089 C149.448649,207.962934 151.87027,206.480309 153.451737,205.145946 C158.492664,203.564479 172.429344,198.820077 185.57529,190.319691 C194.866409,184.290347 198.078764,183.005405 204.997683,181.325097 C211.718919,179.694208 215.919691,173.566023 215.079537,166.795367 L215.079537,166.795367 Z"
        fill="#FFFFFF"
      />
    </g>
  </svg>
);

export default Svg;
