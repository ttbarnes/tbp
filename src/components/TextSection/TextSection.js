import PropTypes from 'prop-types';
import { getBackgoundColorClassName, getTextColorClassName } from './TextSection-className';
import styles from './TextSection.module.scss';

const TextSection = ({ 
  backgroundColor,
  textColor,
  children,
  largePadding
}) => {
  const className = `
    ${getBackgoundColorClassName(backgroundColor)}
    ${getTextColorClassName(textColor)}
  `;

  let innerContainerClassName = styles.container;

  if (largePadding) {
    innerContainerClassName += ` ${styles.containerLargePadding}`;
  }

  return (
    <div className={className}>
      <div className={innerContainerClassName}>
        {children}
      </div>
    </div>
  );
};

TextSection.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  largePadding: PropTypes.bool
};

TextSection.defaultProps = {
  backgroundColor: 'white',
  textColor: 'black',
  largePadding: true
};

export default TextSection;
