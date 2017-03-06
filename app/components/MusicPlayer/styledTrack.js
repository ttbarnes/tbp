import styled from 'styled-components';
import styles from './stylesTrack';
import { PlayButton } from 'react-soundplayer/components';

export const Root = styled.div`${styles.root}`;

export const ColLeft = styled.div`${styles.colLeft}`;

export const ColRight = styled.div`${styles.colRight}`;

export const ButtonPlay = styled(PlayButton)`${styles.playButton}`;

export const GenreTag = styled.div`${styles.genreTag}`;
