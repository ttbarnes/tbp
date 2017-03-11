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

export const AppWrapper = styled.div``;

export const MainContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: calc(${CONTAINER_MAX_WIDTH_LG}px - ${NAV_MAX_WIDTH * 2}px);
  min-height: calc(100vh - ${CONTAINER_SPACING_VERTICAL} + ${FOOTER_HEIGHT}px + 5px);
  padding: ${CONTAINER_SPACING_VERTICAL} ${CONTAINER_SPACING_HORIZONTAL} 0;
  ${media.lg`
    padding-left:${CONTAINER_OFFSET_LEFT};
  `}
  ${media.xlg`
    max-width: calc(${CONTAINER_MAX_WIDTH_XLG}px - ${NAV_MAX_WIDTH * 2}px);
  `}
`;
