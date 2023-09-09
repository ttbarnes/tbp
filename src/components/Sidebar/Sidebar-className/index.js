/**
 * Map class names for various sidebar elements,
 * Depending on certain flags.
 * @param {Object} With flags: isDesktopOrLaptop, menuIsOpen, showCloseOnDesktop
 * @returns {Object}
 */
const mapClassName = ({ isDesktopOrLaptop, menuIsOpen, showCloseOnDesktop }) => {
  let burgerBarClassName = '';
  let burgerCrossClassName = '';
  let crossButtonClassName = 'bm-cross-button';

  if (isDesktopOrLaptop) {
    burgerBarClassName = 'bm-burger-bars-black';

    burgerCrossClassName = 'bm-cross-black';
  } else {
    burgerBarClassName = 'bm-burger-bars-white';
    burgerCrossClassName = 'bm-cross-white';
  }

  if (menuIsOpen) {
    burgerCrossClassName = 'bm-cross-white';
  }

  if (showCloseOnDesktop) {
    crossButtonClassName = `${crossButtonClassName} bm-cross-button-show-on-large-screen`;
  }

  return {
    burgerBarClassName,
    burgerCrossClassName,
    crossButtonClassName
  };
};

export default mapClassName;
