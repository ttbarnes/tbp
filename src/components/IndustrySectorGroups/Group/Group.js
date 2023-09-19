import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import isPopulatedArray from '@/helpers/is-populated-array';
import TextSection from '@/components/TextSection';
import Items from './Items';

const Group = ({ group }) => {
  if (isPopulatedArray(group.items)) {
    return (
      <motion.li
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
        key={group.heading}
      >
        <TextSection largePadding={false}>
          <h2 className='h3-size'>{group.heading}</h2>

          <Items items={group.items} />
        </TextSection>
      </motion.li>
    );
  }

  return null;
};

Group.propTypes = {
  group: PropTypes.shape({
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default Group;
