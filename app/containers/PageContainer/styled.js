import styled from 'styled-components';
import {
  media,
  CONTAINER_MAX_WIDTH_LG,
  CONTAINER_MAX_WIDTH_XLG,
  CONTAINER_SPACING_HORIZONTAL,
  CONTAINER_OFFSET_LEFT,
  NAV_MAX_WIDTH
} from '../../components/styledShared';

export const StyledPageContainer = styled.article`
margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: calc(${CONTAINER_MAX_WIDTH_LG}px - ${NAV_MAX_WIDTH * 2}px);
  padding: 0 ${CONTAINER_SPACING_HORIZONTAL} ${CONTAINER_SPACING_HORIZONTAL};
  ${media.lg`
    padding-left: ${CONTAINER_OFFSET_LEFT}
  `}
  ${media.xlg`
    max-width: calc(${CONTAINER_MAX_WIDTH_XLG}px - ${NAV_MAX_WIDTH * 2}px);
  `}
`;
