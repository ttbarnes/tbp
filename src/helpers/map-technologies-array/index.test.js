import mapTechnologiesArray, { classNameMap, technologyClassName } from '@/helpers/map-technologies-array';
import { TECHNICAL_SKILLS } from '@/content-strings';

describe('helpers/map-technologies-array', () => {
  describe('classNameMap', () => {
    it('should return an array of string mappings', () => {
      const expected = {
        '.': '-',
        ',': '',
        ' ': '-'
      };

      expect(classNameMap).toEqual(expected);
    });
  });

  describe('technologyClassName', () => {
    it('should replace full stops, commas and white space in a string and return as lowercase', () => {
      const mockStr = 'Test.js, powered by XYZ';

      const result = technologyClassName(mockStr);

      const expected = 'test-js-powered-by-xyz';

      expect(result).toEqual(expected);
    });

    describe('when a string is not provided', () => {
      it('should return an empty string', () => {
        const result = technologyClassName();

        expect(result).toEqual('');
      });
    });
  });
  
  describe('mapTechnologiesArray', () => {
    it('should return an array of technologies with text and sanitised className properties', () => {
      const result = mapTechnologiesArray();

      const expected = TECHNICAL_SKILLS.SUMMARY.map((tech) => ({
        text: tech,
        className: technologyClassName(tech)
      }));

      expect(result).toEqual(expected);
    });
  });
});
