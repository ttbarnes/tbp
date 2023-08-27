import isPopulatedArray from '.';

describe('helpers/is-populated-array', () => {
  describe('when an array is populated', () => {
    it('should return true', () => {
      const mockArray = [1];

      const result = isPopulatedArray(mockArray);

      expect(result).toEqual(true);
    });
  });

  describe('when an array is empty', () => {
    it('should return false', () => {
      const result = isPopulatedArray([]);

      expect(result).toEqual(false);
    });
  });

  describe('when an array is not provided', () => {
    it('should return false', () => {
      const result = isPopulatedArray({});

      expect(result).toEqual(false);
    });
  });

  describe('when no param is provided', () => {
    it('should return false', () => {
      const result = isPopulatedArray();

      expect(result).toEqual(false);
    });
  });
});
