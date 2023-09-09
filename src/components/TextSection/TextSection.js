import PropTypes from 'prop-types';
import {
  getBackgoundColorClassName,
  getTextColorClassName
} from './TextSection-className';
import styles from './TextSection.module.scss';

const TextSection = ({
  backgroundColor,
  textColor,
  children,
  largePadding,
  id
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
    <div
      className={className}
      id={id}
    >
      <div className={innerContainerClassName}>{children}</div>
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
  ]),
  largePadding: PropTypes.bool,
  id: PropTypes.string
};

TextSection.defaultProps = {
  backgroundColor: 'white',
  textColor: 'black',
  largePadding: true,
  id: ''
};

export default TextSection;
