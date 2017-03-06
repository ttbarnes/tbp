import styled from 'styled-components';
import { colors } from '../styledShared';

const backgroundTheme = (props) => `
  ${props.type === 'music' && `background: ${colors.blue1}`};
  ${props.type === 'fpv' && `background: ${colors.green1}`};
  ${props.type === 'timelapse' && `background: ${colors.yellow1}`};
`;

const StyledTag = styled.div`
  display: inline-flex;
  padding: 0.5em 1em;
  color: #FFF;
  ${backgroundTheme};
`;

export default StyledTag;
