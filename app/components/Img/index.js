import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  const {
    className,
    src,
    alt
  } = props;
  return (
    <img className={className} src={src} alt={alt} />
  );
}

Img.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};

Img.defaultProps = {
  className: ''
};

export default Img;
