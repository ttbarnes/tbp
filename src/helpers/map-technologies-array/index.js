import { TECHNICAL_SKILLS } from '@/content-strings';

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
 * Map technical skills summary into an array of objects.
 * This is for UI list consumption.
 * @returns {Array}
 */
const mapTechnologiesArray = () => {
  const technologies = TECHNICAL_SKILLS.SUMMARY;

  const mapped = technologies.map((tech) => ({
    text: tech,
    className: technologyClassName(tech)
  }));

  return mapped;
};

export default mapTechnologiesArray;
