const VANILLA_JS = {
  TITLE: 'Vanilla JavaScript'
};

const TYPESCRIPT = {
  TITLE: 'TypeScript'
};

const DEFINITIONS = {
  ARCHITECTURE: {
    TITLE: 'Architecture'
  },
  CI_CD: {
    TITLE: 'CI, CD',
    ITEMS: {
      GHA: 'Github Actions',
      NETLIFY: 'Netlify',
      HEROKU: 'Heroku',
      TEAM_CITY: 'TeamCity',
      JENKINS: 'Jenkins'
    }
  },
  DATABASE: {
    TITLE: 'Database',
    ITEMS: {
      SQL: 'SQL',
      SEQUELIZE: 'Sequelize',
      MONGODB_MONGOOSE: 'MongoDB, Mongoose',
      PRISMA: 'Prisma'
    }
  },
  DATA_VISUALIZATION: {
    TITLE: 'Data visualization',
    ITEMS: {
      D3: 'd3.js',
      HIGHCHARTS: 'Highcharts',
      MAPBOX: 'Mapbox'
    }
  },
  HEADLESS_CMS: {
    TITLE: 'Headless CMS',
    ITEMS: {
      GATSBY: 'Gatsby',
      NETLIFY: 'Netlify CMS',
      KEYSTONE: 'KeystoneJS'
    }
  },
  MISCELLANEOUS: {
    TITLE: 'Miscellaneous',
    ITEMS: {
      BESPOKE_CMS: 'Bespoke CMS',
      OBSERVABLES: 'Observables',
      WEB_SOCKETS: 'WebSockets',
      OPEN_SOURCE: 'Open source',
      FLOW: 'Flow'
    }
  },
  QUERYING_STATE_MANAGEMENT: {
    TITLE: 'Query languages, state management',
    ITEMS: {
      APOLLO: 'Apollo',
      GRAPHQL: 'GraphQL',
      REDUX: 'Redux'
    }
  },
  SECURITY: {
    TITLE: 'Security',
    ITEMS: {
      PEN: 'PEN tests',
      DEPENDENCIES: 'Dependencies',
      VULNERABILITIES: 'Vulnerabilities',
      AUTHENTICATION: 'Authentication',
      ACCESS_CONTROL: 'Access control',
      OWASP: 'OWASP',
      JWT: 'JWT (JSON Web Token)',
      TWO_FACTOR_AUTH: '2FA (Two-Factor Authentication)',
      PASSPORT: 'Passport.js'
    }
  },
  SERVER_SIDE: {
    TITLE: 'Server side',
    ITEMS: {
      NODE_EXPRESS: 'Node.js, express',
      SSR: 'SSR (server side rendering)',
      VANILLA_JS: VANILLA_JS.TITLE,
      TYPESCRIPT: TYPESCRIPT.TITLE
    }
  },
  STYLING: {
    TITLE: 'Styling',
    ITEMS: {
      STYLED_COMPONENTS: 'styled-components',
      APHRODITE: 'Aphrodite',
      SASS: 'Sass',
      STYLUS: 'Stylus',
      LESS: 'Less',
      BEM: 'BEM'
    }
  },
  SYSTEM_INTEGRATIONS: {
    TITLE: 'System integrations',
    ITEMS: {
      DATA_CONSUMPTION: 'Data consumption',
      COMPLEX_DATA_MAPPING: 'Complex data mapping',
      DATA_TRANSFORMATIONs: 'Data transformations'
      // internal & external systems ?
      // Receiving, consuming?
      // APIs / data
    }
  },
  TESTING: {
    TITLE: 'Testing, TDD, BDD',
    ITEMS: {
      JEST: 'Jest',
      REACT_TESTING_LIBRARY: 'React Testing Library',
      CYPRESS: 'Cypress',
      ENZYME: 'Enzyme',
      MOCHA: 'Mocha',
      CHAI: 'Chai',
      SHOULD_JS: 'Shouldjs',
      JASMINE: 'Jasmine',
      KARMA: 'Karma'
    }
  },
  TOOLS_DOCUMENTATION: {
    TITLE: 'Tools, documentation',
    ITEMS: {
      ESLINT: 'ESLint',
      PRETTIER: 'Prettier',
      WEBPACK: 'Webpack',
      GULP: 'Gulp',
      GRUNT: 'Grunt',
      TS_DOC: 'TSDoc',
      JS_DOC: 'JSDoc',
      SWAGGER: 'Swagger',
      LIGHTHOUSE: 'Lighthouse',
      AXE: 'Axe'
    }
  },
  TYPESCRIPT,
  UI: {
    TITLE: 'UI',
    ITEMS: {
      NEXT_JS: 'Next.js',
      REACT: 'React',
      ANGULAR: 'Angular',
      VANILLA_JS: VANILLA_JS.TITLE,
      TYPESCRIPT: TYPESCRIPT.TITLE,
      ACCESSIBILITY: 'Accessibility',
      WCAG_AAA: 'WCAG AAA compliance',
      DESIGN_SYSTEMS: 'Design systems',
      NUNJUCKS: 'Nunjucks'
    }
  },
  VANILLA_JS,
  HISTORICAL: {
    TITLE: 'It all started with...',
    ITEMS: {
      HTML: 'HTML',
      CSS: 'CSS',
      JQUERY: 'jQuery',
      BOOTSTRAP: 'Bootstrap',
      WORDPRESS: 'WordPress',
      MAGENTO: 'Magento'
    }
  }
};

export default DEFINITIONS;
