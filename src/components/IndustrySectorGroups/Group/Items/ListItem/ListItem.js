import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

const ListItem = ({ item }) => (
  <li className={styles.listItem}>
    <div className={`${styles.innerContainer} ${item.id}`}>
      <h3 className={`h4-size ${styles.heading}`}>{item.name}</h3>

      <p className={`no-margin ${styles.summary}`}>{item.summary}</p>
    </div>
  </li>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    colors: PropTypes.shape({
      bg: PropTypes.string,
      text: PropTypes.string,
      border: PropTypes.string
    })
  }).isRequired
};

export default ListItem;
