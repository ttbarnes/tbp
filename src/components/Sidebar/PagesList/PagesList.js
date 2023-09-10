import { ROUTES } from '@/constants';
import SidebarListItem from '../SidebarListItem';
import styles from './PagesList.module.scss';

const PagesList = () => (
  <nav>
    <ul
      aria-label='Pages'
      className={styles.list}
    >
      <SidebarListItem
        title='About'
        href={ROUTES.ABOUT}
      />

      <SidebarListItem
        title='Technical skills'
        href={ROUTES.TECHNICAL_SKILLS}
      />

      <SidebarListItem
        title='Quick thoughts'
        href={ROUTES.QUICK_THOUGHTS}
      />
    </ul>
  </nav>
);

export default PagesList;
