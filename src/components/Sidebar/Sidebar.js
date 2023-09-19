import PropTypes from 'prop-types';
import { useState, useEffect, isValidElement, cloneElement } from 'react';
import { slide as Menu } from 'react-burger-menu';
import SidebarHeading from './SidebarHeading';
import getClassName from './Sidebar-className';
import styles from './Sidebar.module.scss';

function useWindowSize() {
  /**
   * Initialize state with undefined width/height so server and client renders match
   * Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
   */

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    /**
     * Call handler right away,
     * so state gets updated with initial window size
     */
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Sidebar = ({ children, alwaysOpenOnDesktop, showCloseOnDesktop }) => {
  const size = useWindowSize();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  let menuIsOpenViaScreenSize = false;

  let isDesktopOrLaptop = false;

  if (size.width > 1199) {
    isDesktopOrLaptop = true;
  }

  if (isDesktopOrLaptop && alwaysOpenOnDesktop) {
    menuIsOpenViaScreenSize = true;
  }

  const handleIsOpen = () => {
    if (alwaysOpenOnDesktop) {
      if (!isDesktopOrLaptop) {
        setMenuIsOpen(!menuIsOpen);
      }
    } else {
      setMenuIsOpen(!menuIsOpen);
    }
  };

  const { burgerBarClassName, burgerCrossClassName, crossButtonClassName } =
    getClassName({
      isDesktopOrLaptop,
      menuIsOpen,
      showCloseOnDesktop
    });

  return (
    <Menu
      isOpen={menuIsOpenViaScreenSize || menuIsOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      disableCloseOnEsc
      disableOverlayClick={isDesktopOrLaptop && !menuIsOpen}
      noOverlay={isDesktopOrLaptop && !menuIsOpen}
      burgerBarClassName={burgerBarClassName}
      crossButtonClassName={crossButtonClassName}
      crossClassName={burgerCrossClassName}
      noTransition
    >
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <SidebarHeading />

          {isValidElement(children) &&
            cloneElement(children, { onClick: handleIsOpen })}
        </div>
      </div>
    </Menu>
  );
};

Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  alwaysOpenOnDesktop: PropTypes.bool,
  showCloseOnDesktop: PropTypes.bool
};

Sidebar.defaultProps = {
  alwaysOpenOnDesktop: false,
  showCloseOnDesktop: false
};

export default Sidebar;
