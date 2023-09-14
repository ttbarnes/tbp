import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './SidebarListItem.module.scss';

const SidebarListItem = ({ title, href, onClick }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  let className = styles.listItemLink;

  if (isActive) {
    className += ` ${styles.listItemLinkActive}`;
  }

  return (
    <li
      key={title}
      className={styles.listItem}
    >
      <Link
        href={href}
        className={className}
        onClick={onClick}
      >
        <small>{title}</small>
      </Link>
    </li>
  );
};

SidebarListItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

SidebarListItem.defaultProps = {
  onClick: null
};

export default SidebarListItem;
