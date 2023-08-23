import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './SidebarListItem.module.scss';

const SidebarListItem = ({ title, onClick }) => (
  <li
    key={title}
    className={styles.listItem}
  >
    <Link
      href={`#${title}`}
      className={styles.listItemLink}
      onClick={onClick}
    >
      <small>
        {title}
      </small>
    </Link>
  </li>
);

SidebarListItem.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SidebarListItem;
