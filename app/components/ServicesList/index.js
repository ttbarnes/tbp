import React from 'react';
import PropTypes from 'prop-types';
import H3 from '../../components/H3';
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
    <H3>{heading}</H3>
    <ListRoot>
      {services && services.map((service) =>
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
