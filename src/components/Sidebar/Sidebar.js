import { mapTechnologyGroups } from '@/helpers/map-technologies-array';
import SidebarListItem from './SidebarListItem';
import styles from './Sidebar.module.scss';

const groups = mapTechnologyGroups();

const Sidebar = () => (
  <div className={styles.container}>
    <nav className={styles.nav}>
      <ul
        className={styles.list}
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
  </div>  
);

export default Sidebar;
