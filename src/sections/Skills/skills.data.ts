export interface ISkill {
  name: string;
  logo: string;
  link: string;
}

export interface ISkillGroup {
  id: string;
  mainRow: ISkill[];
  otherRow: ISkill[];
}

export const skillsData: ISkillGroup[] = [
  {
    id: 'main',
    mainRow: [
      {
        name: 'HTML 5',
        logo: 'Html',
        link: 'https://www.w3schools.com/html/default.asp',
      },
      {
        name: 'CSS 3',
        logo: 'Css',
        link: 'https://www.w3schools.com/css/default.asp',
      },
      {
        name: 'JavaScript',
        logo: 'Js',
        link: 'https://www.w3schools.com/js/default.asp',
      },
      {
        name: 'TypeScript',
        logo: 'Ts',
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
        logo: 'React',
        link: 'https://reactjs.org/',
      },
      {
        name: 'NodeJS',
        logo: 'Node',
        link: 'https://nodejs.org/en/',
      },
    ],
    otherRow: [
      {
        name: 'Backbone',
        logo: 'Backbone',
        link: 'https://backbonejs.org/',
      },
      {
        name: 'AngularJS',
        logo: 'Angular',
        link: 'https://angular.io/',
      },
      {
        name: 'jQuery',
        logo: 'Jquery',
        link: 'https://jquery.com/',
      },
    ],
  },
  {
    id: 'devtools',
    mainRow: [
      {
        name: 'Jest',
        logo: 'Jest',
        link: 'https://jestjs.io/',
      },
      {
        name: 'ESLint',
        logo: 'Eslint',
        link: 'https://eslint.org/',
      },
      {
        name: 'Prettier',
        logo: 'Prettier',
        link: 'https://prettier.io/',
      },
    ],
    otherRow: [
      {
        name: 'Webpack',
        logo: 'Webpack',
        link: 'https://webpack.js.org/',
      },

      {
        name: 'Yarn',
        logo: 'Yarn',
        link: 'https://yarnpkg.com/lang/en/',
      },
      {
        name: 'NPM',
        logo: 'Npm',
        link: 'https://www.npmjs.com/',
      },
    ],
  },
];
