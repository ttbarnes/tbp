import styled from 'styled-components';
import { colors, tagColors } from '../styledShared';

const backgroundTheme = (props) => {
  const type = props.type;
  if (!props.backgroundTheme) return null;

  return `
    padding: 0.5em 1em;
    margin: 0.3em 0.3em 0 0;
    color: #FFF;
    background: #AAA;

    ${type === 'music' && `background: ${colors.blue2}`};
    ${type === 'fpv' && `background: ${colors.green4}`};
    ${type === 'timelapse' && `background: ${colors.yellow2}`};

    ${(type.includes('HTML') ||
      type.includes('CSS')) &&
      `background: ${tagColors.htmlCss}`
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

    ${type === 'React' &&
      `background: ${tagColors.react}`
    };

    ${type === 'React UI' &&
      `background: ${tagColors.react}`
    };

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
      color: ${colors.brown2}
    `};

    ${type === 'Karma' &&
      `background: ${tagColors.karma}`
    };

    ${type === 'styled-components' &&
      `background: ${tagColors.styledComponents}`
    };

    ${type === 'Aphrodite' && `
      background: ${tagColors.aphrodite};
      color: #000;
   `};

    ${type === 'Stylus' &&
      `background: ${tagColors.stylus}`
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

    ${type.includes('d3') &&
      `background: ${tagColors.d3}`
    };

    ${type === 'Heroku' &&
      `background: ${tagColors.heroku}`
    };

    ${type === 'Observables' &&
      `background: ${tagColors.observables}`
    };

    ${type === 'WebSockets' &&
      `background: ${tagColors.websockets}`
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

  `;
};


const StyledTag = styled.div`
  display: inline-flex;
  font-size: 0.85em;
  ${backgroundTheme}
`;

export default StyledTag;
