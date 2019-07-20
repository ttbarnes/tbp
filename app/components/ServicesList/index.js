import React, { PropTypes } from 'react';
import H3 from '../../components/H3';
import {
  Root,
  ListRoot,
  StyledH4,
  StyledService,
  StyledServiceInner,
  StyledServiceIcon
} from './styled';


const ServicesList = ({
  heading,
  services,
  children
}) => (
  <Root>
    <H3>{heading}</H3>
    <ListRoot>
      {services && services.map((service) =>
        <StyledService
          key={service.name}
        >
          <StyledServiceInner>
            <StyledH4>{service.name}</StyledH4>
            <StyledServiceIcon>
              {service.symbol}
            </StyledServiceIcon>
            <p><small>{service.copy}</small></p>
          </StyledServiceInner>
        </StyledService>
      )}
    </ListRoot>
    {children}
  </Root>
);

ServicesList.propTypes = {
  heading: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  children: PropTypes.node
};

export default ServicesList;
