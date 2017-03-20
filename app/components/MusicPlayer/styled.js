import styled from 'styled-components';
import { PlayButton, Timer, Progress } from 'react-soundplayer/components';
import A from 'components/A';

export const RootFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InlineElm = styled.div`
  margin-right: 0.5em;
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ColArtwork = styled.div`
  flex: 0 0 100px;
  margin-right: 1em;
`;
export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.4;
  border-radius: 50%;
`;

export const ColDetails = styled.div`
  flex: 1;
`;

export const SubHeading = styled.div`
  display: flex;
`;

export const Date = styled(InlineElm)`
  color: #B9B9B9;
`;

export const StyledTimer = styled(Timer)`
  flex-grow: 1;
  text-align: right;
`;

export const StyledButtonPlay = styled(PlayButton)`
  width: 73px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: none;
  width: 100px;
  height: 100px;
  padding: 0;
  outline: 0 none;
`;

export const StyledProgress = styled(Progress)`
  background: #CCC;
  height: 20px;
  cursor: pointer;
`;

export const StyledA = styled(A)`
  margin-top 1em;
`;
