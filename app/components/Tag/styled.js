import styled from 'styled-components';
import { colors, tagColors, media } from '../styledShared';

const tag = `
  font-size: .9em;
  display: inline-flex;
  padding: 0.5em 1em;
  margin: 0.5em 0.3em 0 0;
`;

const spacing = (props) => {
  const { noSpacing } = props;
  if (noSpacing) {
    return `
      margin: 0;
      padding: 0;
    `;
  }
  return null;
};

const smallTag = (props) => {
  const { small } = props;
  if (small) {
    return `
      font-size: .85em;
    `;
  }
  return null;
};

// TODO: add if statements for each type
// this will avoid undefined references in the compiled css
const bgTheme = (props) => {
  const {
    type,
    backgroundTheme
  } = props;

  if (!type || !backgroundTheme) return null;

  return `
    color: #FFF;
    background: #DCDCDC;
    ${type === 'music' && `background: ${colors.blue2}`};
    ${type === 'fpv' && `background: ${colors.green4}`};
    ${type === 'timelapse' && `background: ${colors.yellow2}`};

    ${(type.includes('HTML') ||
      type.includes('CSS')) && `
        color:#000;
      `
};

    ${type === 'Sass' &&
      `background: ${tagColors.sass}`
};

    ${(type.includes('JavaScript') ||
      type.includes('ES6')) && `
        background: ${tagColors.javascript};
        color: #000;
    `};

    ${(type.includes('Full stack JS') ||
      type.includes('MEAN stack')) && `
        background: ${tagColors.javascript};
        color: #000;
    `};

    ${type === 'React' && `
      background: ${tagColors.react};
      color: #000;
    `};

    ${type === 'React UI' && `
      background: ${tagColors.react};
      color: #000;
    `};

    ${type.includes('TypeScript') &&
      `background: ${tagColors.typescript}`
};

    ${type.includes('Flow') && `
      background: ${tagColors.flow};
      color: #000;
    `};

    ${type === 'Redux' &&
      `background: ${tagColors.redux}`
};

    ${type === 'Mapbox' &&
      `background: ${tagColors.mapbox}`
};

    ${type === 'React Native' &&
      `background: ${tagColors.reactNative}`
};

    ${type.includes('Angular') &&
      `background: ${tagColors.angular}`
};

    ${type === 'Angular UI' &&
      `background: ${tagColors.angular}`
};

    ${(type.includes('Express') ||
      type.includes('Node')) &&
      `background: ${tagColors.node}`
};

    ${(type.includes('MongoDB') ||
      type.includes('Mongoose')) &&
      `background: ${tagColors.mongodb}`
};

    ${type === 'Enzyme' && `
      background: ${tagColors.enzyme};
      color: #000;
    `};

    ${type === 'Shouldjs' && `
      background: ${tagColors.shouldJs};
      color: #000;
    `};

    ${type === 'Jasmine' &&
      `background: ${tagColors.jasmine}`
};

    ${type === 'Mocha' &&
      `background: ${tagColors.mocha}`
};

    ${type === 'Chai' && `
      background: ${tagColors.chai};
      color: #000;
    `};

    ${type === 'Karma' &&
      `background: ${tagColors.karma}`
};

    ${type === 'styled-components' && `
      background: ${tagColors.styledComponents};
      color: #000;
    `
};

    ${type === 'Aphrodite' && `
      background: ${tagColors.aphrodite};
      color: #000;
    `};

    ${type === 'Stylus' && `
      background: ${tagColors.stylus};
      color: #000;
    `
};

    ${type === 'Gulp' &&
      `background:${tagColors.gulp}`
};

    ${type === 'Webpack' &&
      `background:${tagColors.webpack}`
};

    ${type === 'Highcharts' &&
      `background: ${tagColors.highcharts}`
};

    ${type.includes('d3') && `
      background: ${tagColors.d3};
      color: #000;
    `
};

    ${type === 'Heroku' &&
      `background: ${tagColors.heroku}`
};

    ${type === 'Observables' &&
      `background: ${tagColors.observables}`
};

    ${type === 'WebSockets' && `
      background: ${tagColors.websockets};
      color: #000;
    `
};

    ${type === 'Docker' &&
      `background: ${tagColors.docker}`
};

    ${type === 'Ruby' &&
      `background: ${tagColors.ruby}`
};

    ${(type === 'Crypto Currency APIs' ||
      type === 'SSR') &&
      `background: ${tagColors.misc}`
};

    ${type.includes('GraphQL') &&
      `background: ${tagColors.graphQL}`
};

    ${(type === 'Apollo') &&
        `background: ${tagColors.apollo}`
};

    ${type === 'UI templates' &&
      `background: ${tagColors.uiTemplates}`
};

    ${type === 'WordPress' &&
      `background: ${tagColors.wordPress}`
};

    ${type === 'UI templates, CMS' &&
      `background: ${tagColors.powaCms}`
};

    ${type === 'jQuery' && `
      background: ${tagColors.jQuery};
      color: #000;
    `
};

    ${type === 'Magento' &&
      `background: ${tagColors.magento}`
};

    ${type === 'Joomla' &&
      `background: ${tagColors.joomla}`
};

    ${type === 'TeamCity' &&
        `background: ${tagColors.teamCity}`
};

    ${type === 'Jenkins' &&
        `background: ${tagColors.jenkins}`
};

    ${type === 'Less' &&
        `background: ${tagColors.less}`
};

    ${type === 'Jest' &&
      `background: ${tagColors.jest}`
};

    ${type === 'AWS' && `
      background: ${tagColors.aws};
      color: #000;
    `
};

    ${type === 'Cloudinary' &&
      `background: ${tagColors.cloudinary}`
};
    ${type === 'Cypress' &&
      `background: ${tagColors.cypress}`
};

    ${type === 'BEM' && `
      color: #000;
    `};

    ${type.includes('Many more') && `
      color: #000;
    `};

  `;
};

const StyledTag = styled.div`
  ${tag}
  ${spacing}
  ${bgTheme}
  ${media.sm`
    font-size: 1em;
  `}
  ${smallTag}
`;

export default StyledTag;
