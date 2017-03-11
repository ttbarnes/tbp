import styled from 'styled-components';
import {
  media,
  CONTAINER_MAX_WIDTH_LG,
  CONTAINER_MAX_WIDTH_XLG,
  CONTAINER_SPACING_VERTICAL,
  CONTAINER_SPACING_HORIZONTAL,
  CONTAINER_OFFSET_LEFT,
  NAV_MAX_WIDTH,
  FOOTER_HEIGHT
} from '../../components/styledShared';
import { MAX_HEIGHT_PAGES } from '../../constants';

const isMaxHeightPage = (name) => MAX_HEIGHT_PAGES.includes(`${name.substring(1)}`);

const minHeight = (props) => `
  ${isMaxHeightPage(props.location.pathname) === true && `
    min-height: calc(100vh - ${CONTAINER_SPACING_VERTICAL} + ${FOOTER_HEIGHT}px + 5px);
  `}
`;

export const MainContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: calc(${CONTAINER_MAX_WIDTH_LG}px - ${NAV_MAX_WIDTH * 2}px);
  padding: ${CONTAINER_SPACING_VERTICAL} ${CONTAINER_SPACING_HORIZONTAL} 0;
  ${minHeight};
  ${media.lg`
    padding-left:${CONTAINER_OFFSET_LEFT};
  `}
  ${media.xlg`
    max-width: calc(${CONTAINER_MAX_WIDTH_XLG}px - ${NAV_MAX_WIDTH * 2}px);
  `}
`;
