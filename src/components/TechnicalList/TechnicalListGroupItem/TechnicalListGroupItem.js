import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const TechnicalListGroupItem = ({ text, className }) => (
  <motion.li
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
    viewport={{ once: true }}
    key={text}
    className={`tag-list-item ${className}`}
  >
    {text}
  </motion.li>
);

TechnicalListGroupItem.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default TechnicalListGroupItem;
