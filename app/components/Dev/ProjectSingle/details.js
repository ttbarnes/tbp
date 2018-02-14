import React, { PropTypes } from 'react';
import {
  StyledImg
} from './styled';

export function CreateMarkup(data) {
  return {
    __html: data
  };
}

export const getProjectImage = (projectId, imgId = '01') =>
  require(`../../../assets/img/dev/${projectId}/${imgId}.jpg`); // eslint-disable-line global-require

export const ThoughtsItem = (props) => {
  if (props.item.copy) {
    return <p>{props.item.copy}</p>;
  } else if (props.item.img) {
    return (
      <StyledImg
        src={getProjectImage(props.projectId, props.item.img)}
        alt={props.projectName}
        isSmall={props.item.isSmall}
      />
    );
  }
  return null;
};

ThoughtsItem.propTypes = {
  item: PropTypes.object.isRequired,
  projectId: PropTypes.string,
  projectName: PropTypes.string
};
