import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './Main.module.scss';

const Main = ({ children, pageHasSidebar }) => {
  let className = styles.container;

  if (pageHasSidebar) {
    className = `${className} ${styles.pageHasSidebar}`;
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.main>
  );
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  pageHasSidebar: PropTypes.bool
};

Main.defaultProps = {
  pageHasSidebar: false
};

export default Main;
