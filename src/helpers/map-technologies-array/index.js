import { TECHNICAL_SKILLS } from '@/content-strings';

export const classNameMap = {
  '.': '-',
  ',': '',
  ' ': '-'
};

export const technologyClassName = (str) => {
  if (str) {
    const REGEX = new RegExp(/[,. ]/g);

    const clean = str.replace(REGEX, matched => classNameMap[matched]);

    return clean.toLowerCase();
  }

  return '';
}

const mapTechnologiesArray = () => {
  const technologies = TECHNICAL_SKILLS.SUMMARY;

  const mapped = technologies.map((tech) => ({
    text: tech,
    className: technologyClassName(tech)
  }));

  return mapped;
};

export default mapTechnologiesArray;
