import React from 'react';
import PropTypes from 'prop-types';
import H3 from '../H3';
import {
  Root,
  ListRoot,
  StyledH4,
  StyledService,
  StyledServiceInner,
  StyledCopy
} from './styled';
import ServiceIcon from './ServiceIcon';

const ServicesList = ({
  heading,
  services,
  children
}) => (
  <Root>
    {heading && <H3>{heading}</H3>}
    <ListRoot>
      {services && services.map((service) => (
        <StyledService
          key={service.name}
        >
          <StyledServiceInner>

            <StyledH4>{service.name}</StyledH4>

            <ServiceIcon name={service.name} />

            <StyledCopy>
              <p><small>{service.copy}</small></p>
            </StyledCopy>

          </StyledServiceInner>
        </StyledService>
      ))}
    </ListRoot>
    {children}
  </Root>
);

ServicesList.propTypes = {
  heading: PropTypes.string,
  services: PropTypes.array.isRequired,
  children: PropTypes.node
};

ServicesList.defaultProps = {
  heading: '',
  children: null
};

export default ServicesList;
