import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

const ListItem = ({ item }) => (
  <li className={styles.listItem}>
    <div
      className={styles.innerContainer}
      style={{
        backgroundColor: item.colors.bg,
        color: item.colors.text,
        border: item.colors.border ? `solid 1px ${item.colors.border}` : 'none'
      }}
    >
      <h3 className={`h4-size ${styles.heading}`}>{item.name}</h3>

      <p className={`no-margin ${styles.summary}`}>{item.summary}</p>
    </div>
  </li>
);

ListItem.propTypes = {
  item: PropTypes.shape({
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
