import PropTypes from 'prop-types';
import styles from './Main.module.scss'

const Main = ({ children, pageHasSidebar }) => {
  let className = styles.container;

  if (pageHasSidebar) {
    className = `${className} ${styles.pageHasSidebar}`;
  }

  return (
    <main className={className}>
      {children}
    </main>
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
