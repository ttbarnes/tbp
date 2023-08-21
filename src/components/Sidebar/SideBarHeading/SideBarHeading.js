import Link from 'next/link';
import { NAME } from '@/content-strings';
import styles from './SidebarHeading.module.scss';

const SideBarHeading = () => (
  <h2 className={styles.heading}>
    <Link
      href='/'
      className='white-text'
    >
      {NAME}
    </Link>
  </h2>
);

export default SideBarHeading;
