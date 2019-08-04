import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './styled';
import rocketIcon from '../../assets/img/rocket.svg';
import magnifyingGlassIcon from '../../assets/img/magnifying-glass.svg';
import globeIcon from '../../assets/img/globe.svg';
import brushPencilIcon from '../../assets/img/brush-pencil.svg';
import bookshelfIcon from '../../assets/img/bookshelf.svg';
import heartIcon from '../../assets/img/heart.svg';

const ServiceIcon = ({ name }) => {
  if (name === 'Consultation') {
    return (
      <StyledIcon src={magnifyingGlassIcon} role="presentation" />
    );
  }
  if (name === 'Web App Development') {
    return (
      <StyledIcon src={rocketIcon} role="presentation" />
    );
  }
  if (name === 'Websites') {
    return (
      <StyledIcon src={globeIcon} role="presentation" />
    );
  }
  if (name === 'User Experience, Design') {
    return (
      <StyledIcon src={brushPencilIcon} role="presentation" />
    );
  }
  if (name === 'Training, mentoring') {
    return (
      <StyledIcon src={bookshelfIcon} role="presentation" />
    );
  }
  if (name === 'Much more...') {
    return (
      <StyledIcon src={heartIcon} role="presentation" />
    );
  }
  return null;
};

ServiceIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default ServiceIcon;
