import { shallow } from 'enzyme';
import React from 'react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should match snapshot', () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });
});
