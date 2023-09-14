import Link from 'next/link';
import { NAME } from '@/content-strings';
import styles from './SidebarHeading.module.scss';

const SidebarHeading = () => (
  <h2 className={styles.heading}>
    <Link
      href='/'
      className={`${styles.headingLink} white-text`}
    >
      {NAME}
    </Link>
  </h2>
);

export default SidebarHeading;
