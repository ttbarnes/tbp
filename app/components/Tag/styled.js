import styled from 'styled-components';
import { colors } from '../styledShared';

const backgroundTheme = (props) => {
  const type = props.type;

  return `
    ${type === 'music' && `background: ${colors.blue1}`};
    ${type === 'fpv' && `background: ${colors.green1}`};
    ${type === 'timelapse' && `background: ${colors.yellow1}`};

    ${(type.includes('HTML') ||
      type.includes('CSS')) &&
      `background: ${colors.red2}`
    };

    ${(type === 'Sass' ||
      type === 'Less' ||
      type === 'Stylus') &&
      `background: ${colors.pink1}`
    };

    ${(type.includes('JavaScript') ||
      type.includes('ES6')) &&
      'background: #CFBD44'
    };

    ${type === 'Full stack JS' &&
      `background: ${colors.red2}`
    };

    ${type === 'React' &&
      `background: ${colors.blue5}`
    };

    ${type.includes('TypeScript') &&
      `background: ${colors.blue4}`
    };

    ${type === 'Redux' &&
      'background: #FF7C00'
    };

    ${type.includes('Angular') &&
      'background: #E23337'
    };

    ${(type.includes('Express') ||
      type.includes('Node')) &&
      'background: #C6C6C6'
    };
    
    ${(type.includes('MongoDB') ||
      type.includes('Mongoose')) &&
      'background: #6ba442'
    };

    ${type === 'Grunt' &&
      'background: #E48632'
    };

    ${type === 'Gulp' &&
      'background:#CF4646'
    };

    ${type === 'Webpack' &&
      'background:#6B93D7'
    };

    ${type === 'Highcharts' &&
      'background:#8E95F3'
    };

    ${type.includes('d3') &&
      'background:#F89741'
    };

    ${type === 'Rails' &&
      'background: #981a21'
    };

    ${type === 'Scala' &&
      'background: #52B2A3'
    };

    ${type === 'jQuery' &&
      'background: #0667AB'
    };

  `;
};

const StyledTag = styled.div`
  display: inline-flex;
  padding: 0.5em 1em;
  margin: 0 0.5em 0.5em 0;
  color: #FFF;
  background: #AAA; /* default */
  ${backgroundTheme};
`;

export default StyledTag;
