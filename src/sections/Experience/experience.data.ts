export interface IExperience {
  id: string;
  title: string;
  subtitle?: string;
  link?: string;
  techTags?: string[];
  contextTags?: string[];
  startDate?: string;
  endDate?: string;
}

export const experienceData: IExperience[] = [
  /* {
    id: 'hubside',
    title: 'Hubside',
    link: 'https://www.hubside.com/',
    startDate: '2019-11-01',
  }, */
  {
    id: 'meetic',
    title: 'Meetic',
    subtitle: 'Affiny',
    link: 'https://www.affiny.fr/',
    techTags: [
      'TypeScript',
      'React',
      'React Native',
      'Redux',
      'Redux-saga',
      'Styled-components',
      'Jest',
      'ESLint',
      'Webpack',
    ],
    contextTags: ['fromScratch', 'public', 'performance', 'improvement'],
    startDate: '2019-01-01',
    endDate: '2019-11-01',
  },
  {
    id: 'rf',
    title: 'Radio France',
    link: 'https://www.radiofrance.fr/',
    techTags: [
      'TypeScript',
      'React',
      'Redux',
      'RxJS',
      'Less',
      'Jest',
      'ESLint',
      'Webpack',
    ],
    contextTags: ['rework', 'backOffice'],
    startDate: '2017-10-01',
    endDate: '2018-12-01',
  },
  {
    id: 'dimitri',
    title: 'DimitriMalignan.com',
    link: 'https://dimitrimalignan.com/',
    techTags: ['React', 'Sass', 'ESLint', 'Webpack'],
    contextTags: ['fromScratch', 'public', 'uxui', 'seo'],
    startDate: '2017-06-01',
    endDate: '2017-06-01',
  },
  {
    id: 'pmu',
    title: 'PMU',
    subtitle: 'Hipigo',
    link: 'https://hipigo.pmu.fr',
    techTags: [
      'Backbone',
      'Marionette',
      'Handlebars',
      'Sass',
      'Jest',
      'ESLint',
      'E2E Tests (WebDriverIO)',
      'Webpack',
    ],
    contextTags: ['fromScratch', 'public'],
    startDate: '2017-01-01',
    endDate: '2017-10-01',
  },
  {
    id: 'challenges',
    title: 'Challenges',
    subtitle: 'Sciences et Avenir',
    link: 'https://www.challenges.fr/',
    techTags: ['NodeJS', 'Express', 'EJS', 'JWT', 'jQuery'],
    contextTags: ['rework', 'public', 'performance', 'seo'],
    startDate: '2016-01-01',
    endDate: '2016-12-01',
  },
  {
    id: 'stime',
    title: 'Les Mousquetaires',
    link: 'https://www.mousquetaires.com/',
    techTags: ['Angular', 'jQuery', 'Bootstrap', 'Sass'],
    contextTags: ['rework', 'maintenance', 'backOffice'],
    startDate: '2014-05-01',
    endDate: '2015-12-01',
  },
  {
    id: 'equipe',
    title: "L'Equipe",
    link: 'https://www.lequipe.fr/',
    techTags: ['jQuery', 'CSS'],
    contextTags: ['uxui'],
    startDate: '2014-05-01',
    endDate: '2014-05-01',
  },
  {
    id: 'sfeir',
    title: 'SFEIR',
  },
  {
    id: 'ratp',
    title: 'RATP',
    link: 'https://www.ratp.fr/',
    techTags: ['JS', 'Bootstrap', 'CSS', 'PHP'],
    contextTags: ['maintenance', 'backOffice'],
    startDate: '2014-05-01',
    endDate: '2014-05-01',
  },
  {
    id: 'pagesjaunes',
    title: 'Pages Jaunes',
    link: 'https://www.pagesjaunes.fr/',
    techTags: ['Backbone', 'Handlebars', 'Bootstrap', 'CSS'],
    contextTags: ['rework', 'backOffice'],
    startDate: '2013-05-01',
    endDate: '2014-04-01',
  },
  {
    id: 'sfr',
    title: 'SFR',
    link: 'https://www.sfr.fr/',
    techTags: ['Informatica', 'Korn Shell', 'SQL', 'VBA'],
    contextTags: ['database'],
    startDate: '2011-10-01',
    endDate: '2013-05-01',
  },
  {
    id: 'capgemini',
    title: 'Capgemini',
  },
];