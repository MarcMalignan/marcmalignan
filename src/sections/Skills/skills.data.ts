import { ISkillGroup } from './skills.types';

interface ISkillsData {
  skills: ISkillGroup[];
}

export const skillsData: ISkillsData = {
  skills: [
    {
      id: 'main',
      mainRow: [
        {
          name: 'HTML 5',
          logo: 'html.svg',
          link: 'https://www.w3schools.com/html/default.asp',
        },
        {
          name: 'CSS 3',
          logo: 'css.svg',
          link: 'https://www.w3schools.com/css/default.asp',
        },
        {
          name: 'JavaScript',
          logo: 'js.svg',
          link: 'https://www.w3schools.com/js/default.asp',
        },
        {
          name: 'TypeScript',
          logo: 'ts.svg',
          link: 'https://www.typescriptlang.org/',
        },
      ],
      otherRow: [],
    },
    {
      id: 'frameworks',
      mainRow: [
        {
          name: 'React',
          logo: 'react.svg',
          link: 'https://reactjs.org/',
        },
        {
          name: 'NodeJS',
          logo: 'node.svg',
          link: 'https://nodejs.org/en/',
        },
      ],
      otherRow: [
        {
          name: 'Backbone',
          logo: 'backbone.svg',
          link: 'https://backbonejs.org/',
        },
        {
          name: 'AngularJS',
          logo: 'angular.svg',
          link: 'https://angular.io/',
        },
        {
          name: 'jQuery',
          logo: 'jquery.svg',
          link: 'https://jquery.com/',
        },
      ],
    },
    {
      id: 'devtools',
      mainRow: [
        {
          name: 'Jest',
          logo: 'jest.svg',
          link: 'https://jestjs.io/',
        },
        {
          name: 'ESLint',
          logo: 'eslint.svg',
          link: 'https://eslint.org/',
        },
        {
          name: 'Prettier',
          logo: 'prettier.svg',
          link: 'https://prettier.io/',
        },
      ],
      otherRow: [
        {
          name: 'NPM',
          logo: 'npm.svg',
          link: 'https://www.npmjs.com/',
        },
        {
          name: 'Yarn',
          logo: 'yarn.svg',
          link: 'https://yarnpkg.com/lang/en/',
        },
        {
          name: 'Webpack',
          logo: 'webpack.svg',
          link: 'https://webpack.js.org/',
        },
      ],
    },
  ],
};
