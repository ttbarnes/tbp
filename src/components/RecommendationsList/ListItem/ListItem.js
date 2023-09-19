import PropTypes from 'prop-types';
import TextSection from '@/components/TextSection';
import styles from './ListItem.module.scss';

const ListItem = ({ author, authorText, role }) => (
  <li>
    <TextSection largePadding={false}>
      <p>
        <span>&ldquo;</span>

        <span className={styles.authorText}>{authorText}</span>

        <span>&rdquo;</span>
      </p>

      <p
        aria-label={`Recommendation by ${author}. ${author}'s role is "${role}"`}
      >
        {author} - {role}
      </p>
    </TextSection>
  </li>
);

ListItem.propTypes = {
  author: PropTypes.string.isRequired,
  authorText: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default ListItem;
