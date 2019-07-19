import React, { PropTypes } from 'react';
import H4 from '../../components/H4';
import {
  ListRoot,
  StyledService,
  StyledServiceInner,
  StyledServiceIcon
} from './styled';
import tempIcon from '../../assets/img/temp.svg';


const ServicesList = ({ services }) => (
  <ListRoot>
    {services && services.map((service) =>
      <StyledService
        key={service.name}
      >
        <StyledServiceInner>
          <H4>{service.name}</H4>
          <StyledServiceIcon
            src={tempIcon}
            alt={service.name}
          />
          <p><small>{service.copy}</small></p>
        </StyledServiceInner>
      </StyledService>
    )}
  </ListRoot>
);

ServicesList.propTypes = {
  services: PropTypes.array.isRequired
};

export default ServicesList;
