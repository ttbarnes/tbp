import styled from 'styled-components';
import { Link } from 'react-router';
import styles from './styles';

export const ListRoot = styled.ul`${styles.listRoot}`;

export const StyledListItem = styled.li`${styles.listItem}`;

export const StyledListItemLink = styled(Link)`${styles.listItemLink}`;
