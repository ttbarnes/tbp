import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './Main.module.scss';

const Main = ({
  children,
  extraTopPadding = false,
  pageHasSidebar = false
}) => {
  let className = styles.container;

  if (extraTopPadding || pageHasSidebar) {
    className = `${className} ${styles.extraTopPadding}`;
  }

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
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  extraTopPadding: PropTypes.bool,
  pageHasSidebar: PropTypes.bool
};

export default Main;
