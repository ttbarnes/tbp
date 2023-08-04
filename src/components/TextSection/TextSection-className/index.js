import styles from '../TextSection.module.scss';

/**
 * Map a background color name to a predefined CSS class name
 * @param {String} Background color name
 * @returns {String}
 */
export const getBackgoundColorClassName = (color) => {
  switch (color) {
    case 'black':
      return styles.backgroundBlack;

    case 'blue':
      return styles.backgroundBlue;

    case 'grey':
      return styles.backgroundGrey;

    case 'white':
      return styles.backgroundWhite;

    case 'yellow':
      return styles.backgroundYellow

    default: ''
  }
};

/**
 * Map a text color name to a predefined CSS class name
 * @param {String} Text color name
 * @returns {String}
 */
export const getTextColorClassName = (color) => {
  switch (color) {
    case 'black':
      return styles.textBlack;

    case 'white':
      return styles.textWhite

    default: ''
  }
};
