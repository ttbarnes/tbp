import { TECHNICAL_SKILLS } from '@/content-strings';

const { GROUPS, SUMMARY } = TECHNICAL_SKILLS;

/**
 * Map of special characters to replace
 * For a clean CSS class name.
 * 1) '.' should be replaced with '-'
 * 2) ',' should be replaced with ''
 * 3) ' ' should be replaced with '-'
 */
export const CLASS_NAME_MAP = {
  '.': '-',
  ',': '',
  ' ': '-'
};

/**
 * Replace certain special characters in a "technology" string.
 * This enables us to create clean CSS class names
 * and avoid having to manually hard code CSS class names.
 * @param {String} Technology name
 * @returns {String}
 */
export const technologyClassName = (str) => {
  if (str) {
    const REGEX = new RegExp(/[,. ]/g);

    const clean = str.replace(REGEX, matched => CLASS_NAME_MAP[matched]);

    return clean.toLowerCase();
  }

  return '';
}

/**
 * Map an array of technology skills
 * This is for UI list consumption via summary and group mappings.
 * @returns {Array} Array of skill objects
 */
export const mapTechnologyItems = (items) => {
  const mapped = items.map((item) => ({
    text: item,
    className: technologyClassName(item)
  }));

  return mapped;
};

/**
 * Map a summary of technical skills
 * @returns {Array} Simple technologies summary array of objects
 */
export const mapTechnologiesSummary = () => {
  const technologies = SUMMARY;

  const mapped = mapTechnologyItems(technologies);

  return mapped;
};

/**
 * Map groups of technical skills with child items
 * @returns {Array} Technology groups array of objects
 */
export const mapTechnologyGroups = () => {
  const groupTitles = Object.keys(GROUPS);

  const mapped = groupTitles.map((key) => {
    const group = GROUPS[key];

    const mappedGroup = {
      TITLE: group.TITLE,
      ITEMS: []
    };

    if (group.ITEMS) {
      const itemTitles = Object.values(group.ITEMS);

      mappedGroup.ITEMS = mapTechnologyItems(itemTitles);
    }

    return mappedGroup;
  });

  return mapped;
};

export default mapTechnologiesSummary;
