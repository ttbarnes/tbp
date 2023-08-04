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

    describe('when `white` string is passed', () => {
      it('should return white background class', () => {
        const result = getBackgoundColorClassName('white');

        expect(result).toEqual(styles.backgroundWhite);
      });
    });

    describe('when no string match is found', () => {
      it('should return undefined', () => {
        const result = getBackgoundColorClassName('rainbow');

        expect(result).toEqual(undefined);
      });
    });

    describe('when no string is passed', () => {
      it('should return undefined', () => {
        const result = getBackgoundColorClassName();

        expect(result).toEqual(undefined);
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
      it('should return undefined', () => {
        const result = getTextColorClassName('rainbow');

        expect(result).toEqual(undefined);
      });
    });

    describe('when no string is passed', () => {
      it('should return undefined', () => {
        const result = getTextColorClassName();

        expect(result).toEqual(undefined);
      });
    });
  });
});
