import getClassName from '.';

const baseParams = {
  isDesktopOrLaptop: false,
  menuIsOpen: false,
  showCloseOnDesktop: false
};

describe('components/Sidebar/Sidebar-className', () => {
  describe('when all params are false', () => {
    it('should return default class names', () => {
      const result = getClassName(baseParams);

      const expected = {
        burgerBarClassName: 'bm-burger-bars-white',
        burgerCrossClassName: 'bm-cross-white',
        crossButtonClassName: 'bm-cross-button'
      };

      expect(result).toEqual(expected);
    });
  });

  describe('when isDesktopOrLaptop is true', () => {
    it('should return alternative burgerBarClassName and burgerCrossClassName', () => {
      const result = getClassName({
        ...baseParams,
        isDesktopOrLaptop: true
      });

      const expected = {
        burgerBarClassName: 'bm-burger-bars-black',
        burgerCrossClassName: 'bm-cross-black',
        crossButtonClassName: 'bm-cross-button'
      };

      expect(result).toEqual(expected);
    });
  });

  describe('when menuIsOpen is true', () => {
    it('should return alternative burgerCrossClassName', () => {
      const result = getClassName({
        ...baseParams,
        menuIsOpen: true
      });

      expect(result.burgerCrossClassName).toEqual('bm-cross-white');
    });
  });

  describe('when showCloseOnDesktop is true', () => {
    it('should return alternative crossButtonClassName', () => {
      const result = getClassName({
        ...baseParams,
        showCloseOnDesktop: true
      });

      const expected = 'bm-cross-button bm-cross-button-show-on-large-screen';

      expect(result.crossButtonClassName).toEqual(expected);
    });
  });
});
