import PropTypes from 'prop-types';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import styles from './FindOutMore.module.scss';

const FindOutMore = ({ renderTechSkillsLink, renderThoughtsLink }) => (
  <div className={styles.container}>
    <h3>Find out more</h3>

    <ul
      aria-label='Links to find out more about Tony'
      className={styles.list}
    >
      {renderTechSkillsLink && (
        <li className={styles.listItem}>
          <Link href={ROUTES.TECHNICAL_SKILLS}>
            Tony{"'"}s technical skills
          </Link>
        </li>
      )}

      {renderThoughtsLink && (
        <li className={styles.listItem}>
          <Link href={ROUTES.TONYS_THOUGHTS}>Tony{"'"}s thoughts</Link>
        </li>
      )}

      <li className={styles.listItem}>
        <Link href={ROUTES.ABOUT}>About Tony</Link>
      </li>
    </ul>
  </div>
);

FindOutMore.propTypes = {
  renderTechSkillsLink: PropTypes.bool,
  renderThoughtsLink: PropTypes.bool
};

FindOutMore.defaultProps = {
  renderTechSkillsLink: false,
  renderThoughtsLink: false
};

export default FindOutMore;
