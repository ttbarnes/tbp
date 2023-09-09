import {
  CLASS_NAME_MAP,
  technologyClassName,
  mapTechnologyItems,
  mapTechnologyGroups,
  mapTechnologiesSummary
} from '@/helpers/map-technologies-array';
import { TECHNICAL_SKILLS } from '@/content-strings';

const { GROUPS, SUMMARY } = TECHNICAL_SKILLS;

describe('helpers/map-technologies-array', () => {
  describe('CLASS_NAME_MAP', () => {
    it('should return an array of string mappings', () => {
      const expected = {
        '.': '-',
        ',': '',
        ' ': '-',
        '(': '',
        ')': ''
      };

      expect(CLASS_NAME_MAP).toEqual(expected);
    });
  });

  describe('technologyClassName', () => {
    it('should replace full stops, commas, brackets and white space in a string and return as lowercase', () => {
      const mockStr = 'Test.js, powered by (XYZ)';

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

  describe('mapTechnologyItems', () => {
    it('should return an array of items with text and sanitised className properties', () => {
      const mockItems = SUMMARY;

      const result = mapTechnologiesSummary(mockItems);

      const expected = mockItems.map((item) => ({
        text: item,
        className: technologyClassName(item)
      }));

      expect(result).toEqual(expected);
    });
  });

  describe('mapTechnologiesSummary', () => {
    it('should return an array of technologies via mapTechnologyItems', () => {
      const result = mapTechnologiesSummary();

      const expected = mapTechnologyItems(SUMMARY);

      expect(result).toEqual(expected);
    });
  });

  describe('mapTechnologyGroups', () => {
    it('should return an array of technologies groups and items via mapTechnologyItems', () => {
      const result = mapTechnologyGroups();

      const groupTitles = Object.keys(GROUPS);

      const expected = groupTitles.map((key) => {
        const group = GROUPS[key];
        const itemTitles = Object.values(group.ITEMS);

        return {
          TITLE: group.TITLE,
          ITEMS: mapTechnologyItems(itemTitles)
        };
      });

      expect(result).toEqual(expected);
    });
  });
});
