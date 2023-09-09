import { getBackgoundColorClassName, getTextColorClassName } from '.';
import styles from '../TextSection.module.scss';

describe('components/TextSection/TextSection-className', () => {
  describe('getBackgoundColorClassName', () => {
    describe('when `black` string is passed', () => {
      it('should return black background class', () => {
        const result = getBackgoundColorClassName('black');

        expect(result).toEqual(styles.backgroundBlack);
      });
    });

    describe('when `blue` string is passed', () => {
      it('should return blue background class', () => {
        const result = getBackgoundColorClassName('blue');

        expect(result).toEqual(styles.backgroundBlue);
      });
    });

    describe('when `grey` string is passed', () => {
      it('should return grey background class', () => {
        const result = getBackgoundColorClassName('grey');

        expect(result).toEqual(styles.backgroundGrey);
      });
    });

    describe('when `lightGrey` string is passed', () => {
      it('should return light grey background class', () => {
        const result = getBackgoundColorClassName('lightGrey');

        expect(result).toEqual(styles.backgroundLightGrey);
      });
    });

    describe('when `white` string is passed', () => {
      it('should return white background class', () => {
        const result = getBackgoundColorClassName('white');

        expect(result).toEqual(styles.backgroundWhite);
      });
    });

    describe('when no string match is found', () => {
      it('should return an empty string', () => {
        const result = getBackgoundColorClassName('rainbow');

        expect(result).toEqual('');
      });
    });

    describe('when no string is passed', () => {
      it('should return an empty string', () => {
        const result = getBackgoundColorClassName();

        expect(result).toEqual('');
      });
    });
  });

  describe('getTextColorClassName', () => {
    describe('when `black` string is passed', () => {
      it('should return black text class', () => {
        const result = getTextColorClassName('black');

        expect(result).toEqual(styles.textBlack);
      });
    });

    describe('when `white` string is passed', () => {
      it('should return white text class', () => {
        const result = getTextColorClassName('white');

        expect(result).toEqual(styles.textWhite);
      });
    });

    describe('when no string match is found', () => {
      it('should return an empty string', () => {
        const result = getTextColorClassName('rainbow');

        expect(result).toEqual('');
      });
    });

    describe('when no string is passed', () => {
      it('should return an empty string', () => {
        const result = getTextColorClassName();

        expect(result).toEqual('');
      });
    });
  });
});
