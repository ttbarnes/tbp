import styles from '../TextSection.module.scss';

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

export const getTextColorClassName = (color) => {
  switch (color) {
    case 'black':
      return styles.textBlack;

    case 'white':
      return styles.textWhite

    default: ''
  }
};
