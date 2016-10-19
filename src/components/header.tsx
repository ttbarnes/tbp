import * as React from 'react';
import { Link } from 'react-router';
import * as Radium from 'radium';

import styles from './header.styles';

const NavLink = Radium(Link);

interface HeaderViewProps {
  title: string;
  items: Object;
};

const renderNavItem = (item, key) => {
  return (
    <li key={key}>
      <NavLink to="/" key={key} style={styles.navItem}>{item}</NavLink>
    </li>
  );
};

export const Header: React.StatelessComponent<HeaderViewProps> = ({
  title,
  items
}) => {
  return (
    <header style={styles.header}>
      <div style={styles.title}>{title}</div>
      <nav style={styles.nav}>
        {
          Object.keys(items).map((i, k) => {
            return renderNavItem(i, k);
          })
        }
      </nav>
    </header>
  );
};

export default (Radium(Header));
