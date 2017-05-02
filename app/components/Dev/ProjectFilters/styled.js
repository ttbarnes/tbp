import styled from 'styled-components';
import List from 'components/List';
import { media } from '../../styledShared';

export const FlexList = styled(List)`
  display: none;
  ${media.sm`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.8em;
  `}
  ${media.lg`
    padding: 0 1.2em;
  `}
`;

export const Spacer = styled.span`
  opacity: .2;
`;

const buttonActive = (props) => `
  ${props.isActive && `
    span {
      border-bottom-color: #888;
    }
  `};
`;

const buttonLast = (props) => `
  ${props.isLast && 'margin-right: 0;'};
`;

export const Button = styled.button`
  width: auto;
  background: none;
  padding: 0.5em 0;
  margin: 0 1em;
  transition: all 0.3s ease;
  ${buttonActive}
  ${buttonLast}
  &:hover,
  &:focus {
    outline: 0 none;
    span {
      border-bottom-color: #888;
    }
  }
`;

export const ButtonInner = styled.span`
  padding: 0.1em 0;
  border-bottom: solid 1px transparent;
`;
