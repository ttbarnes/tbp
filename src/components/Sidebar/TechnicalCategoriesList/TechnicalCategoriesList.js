import PropTypes from 'prop-types';
import { mapTechnologyGroups } from '@/helpers/map-technologies-array';
import SidebarListItem from '../SidebarListItem';
import styles from './TechnicalCategoriesList.module.scss';

const groups = mapTechnologyGroups();

const TechnicalCategoriesList = ({ onClick }) => (
  <nav className={styles.nav}>
    <h4>Technical categories</h4>

    <ul aria-label="Categories of Tony's technical skills">
      {groups.map((group) => (
        <SidebarListItem
          key={group.TITLE}
          title={group.TITLE}
          href={`#${group.TITLE}`}
          onClick={onClick}
        />
      ))}
    </ul>
  </nav>
);

TechnicalCategoriesList.propTypes = {
  onClick: PropTypes.func
};

TechnicalCategoriesList.defaultProps = {
  onClick: null
};

export default TechnicalCategoriesList;
