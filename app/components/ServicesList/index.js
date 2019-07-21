import React, { PropTypes } from 'react';
import H3 from '../../components/H3';
import {
  Root,
  ListRoot,
  StyledH4,
  StyledService,
  StyledServiceInner,
  StyledServiceIcon,
  StyledCopy
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

            <StyledServiceIcon dangerouslySetInnerHTML={{ __html: service.symbol }} />

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
