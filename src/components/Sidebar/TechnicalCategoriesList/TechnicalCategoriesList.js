import { mapTechnologyGroups } from '@/helpers/map-technologies-array';
import SidebarListItem from '../SidebarListItem';
import styles from './TechnicalCategoriesList.module.scss';

const groups = mapTechnologyGroups();

const TechnicalCategoriesList = () => (
  <nav className={styles.nav}>
    <ul
      aria-label="Categories of Tony's technical skills"
    >
      {groups.map((group) => (
        <SidebarListItem
          key={group.TITLE}
          title={group.TITLE}
        />
      ))}
    </ul>
  </nav>
);

export default TechnicalCategoriesList;
