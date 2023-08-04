import PropTypes from 'prop-types';
import { getBackgoundColorClassName, getTextColorClassName } from './TextSection-className';

const TextSection = ({ 
  backgroundColor,
  textColor,
  children
}) => {
  const className = `
    ${getBackgoundColorClassName(backgroundColor)}
    ${getTextColorClassName(textColor)}
  `;

  return (
    <div className={className}>
      <div className='container container-large-padding'>
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
  ]).isRequired
};

TextSection.defaultProps = {
  backgroundColor: 'white',
  textColor: 'black'
};

export default TextSection;
