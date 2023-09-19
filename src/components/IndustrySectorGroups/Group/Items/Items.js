import PropTypes from 'prop-types';
import isPopulatedArray from '@/helpers/is-populated-array';
import ListItem from './ListItem';
import styles from './Items.module.scss';

const Items = ({ items }) => {
  if (isPopulatedArray(items)) {
    return (
      <ul className={styles.listContainer}>
        {items.map((item) => (
          <ListItem
            key={item.name}
            item={item}
          />
        ))}
      </ul>
    );
  }

  return null;
};

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
};

export default Items;
