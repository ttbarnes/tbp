import { mapTechnologyGroups } from '@/helpers/map-technologies-array';
import SidebarHeading from './SidebarHeading';
import SidebarListItem from './SidebarListItem';
import styles from './Sidebar.module.scss';

const groups = mapTechnologyGroups();

const Sidebar = () => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <SidebarHeading />

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
    </div>
  </div> 
);

export default Sidebar;
