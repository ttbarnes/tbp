import { ROUTES } from '@/constants';
import SidebarListItem from '../SidebarListItem';

const PagesList = () => (
  <nav>
    <ul
      aria-label='Pages'
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
