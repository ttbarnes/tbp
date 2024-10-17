import PropTypes from 'prop-types';
import {
  getBackgoundColorClassName,
  getTextColorClassName
} from './TextSection-className';
import styles from './TextSection.module.scss';

const TextSection = ({
  backgroundColor = 'white',
  textColor = 'black',
  children,
  largePadding = true,
  id = ''
}) => {
  const className = `
    ${getBackgoundColorClassName(backgroundColor)}
    ${getTextColorClassName(textColor)}
  `;

  let innerContainerClassName = styles.innerContainer;

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
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
    PropTypes.string
  ]),
  largePadding: PropTypes.bool,
  id: PropTypes.string
};

export default TextSection;
