import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import SidebarHeading from './SidebarHeading';
import styles from './Sidebar.module.scss';

const Sidebar = ({ children }) => {
  let menuIsOpen = false;

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1200px)'
  })

  menuIsOpen = isDesktopOrLaptop;

  return (
    <Menu
      isOpen={menuIsOpen}
      disableCloseOnEsc
      disableOverlayClick={isDesktopOrLaptop}
      noOverlay={isDesktopOrLaptop}
      noTransition
    >
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <SidebarHeading />

          {children}
        </div>
      </div> 
    </Menu>
  )
}

Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};

export default Sidebar;
