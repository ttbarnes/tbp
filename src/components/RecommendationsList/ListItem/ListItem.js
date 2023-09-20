import PropTypes from 'prop-types';
import TextSection from '@/components/TextSection';
import styles from './ListItem.module.scss';

const ListItem = ({ author, authorText, role }) => (
  <li className={styles.listItem}>
    <TextSection largePadding={false}>
      <blockquote>
        <span className={styles.authorTextContainer}>
          {authorText.map((text) => (
            <p
              key={text}
              className={styles.authorText}
            >
              {text}
            </p>
          ))}
        </span>

        <footer
          aria-label={`Recommendation by ${author}. ${author}'s role is "${role}"`}
        >
          {author} - {role}
        </footer>
      </blockquote>
    </TextSection>
  </li>
);

ListItem.propTypes = {
  author: PropTypes.string.isRequired,
  authorText: PropTypes.arrayOf(PropTypes.string),
  role: PropTypes.string.isRequired
};

export default ListItem;
