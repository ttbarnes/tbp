import Link from 'next/link';
import { ROUTES } from '@/constants';
import styles from './FindOutMore.module.scss';

const FindOutMore = () => (
  <div className={styles.container}>
    <h3>Find out more</h3>

    <ul
      aria-label='Links to find out more about Tony'
      className={styles.list}
    >
      <li className={styles.listItem}>
        <Link href={ROUTES.ABOUT}>
          About Tony
        </Link>
      </li>

      <li>
        <Link href={ROUTES.QUICK_THOUGHTS}>
          Tony{"'"}s quick thoughts
        </Link>
      </li>
    </ul>
  </div>
);

export default FindOutMore;
