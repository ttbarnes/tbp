import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { BoldLink } from 'components/styledShared';
import ServicesList from 'components/ServicesList';
import { selectServices } from '../../selectors/services';
import PageContainer from '../PageContainer';
import {
  IntroRoot,
  Flex,
  IntroHeadingMobileOnly,
  IntroHeading,
  IntroSubHeading,
  HeadingHello,
  HeadingSub,
  Intro,
  FadeInImage,
  IntroCopy,
  ServicesContainer,
} from './styled';
import TbImage from '../../assets/img/tony-barnes.jpg';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { services } = this.props;
    return (
      <PageContainer>

        <Helmet
          title="Freelance Front End, Full Stack JavaScript Developer"
          meta={[
            { name: 'description', content: 'Freelance developer, London' },
          ]}
        />


        <IntroHeadingMobileOnly>Hello!&nbsp;I{'\''}m Tony.</IntroHeadingMobileOnly>

        <IntroRoot>

          <Flex>
            <FadeInImage src={TbImage} alt="Tony in a suit" />
          </Flex>

          <div>
            <IntroHeading>
              <HeadingHello>Hello!&nbsp;</HeadingHello>
              <HeadingSub>I{'\''}m Tony.</HeadingSub>
            </IntroHeading>

            <IntroSubHeading>
              Freelance, Front End/Full Stack JavaScript Developer specialising in bespoke web app development.
            </IntroSubHeading>

            <Intro>
              <IntroCopy index="0"><Link to="about">Learn more</Link> <br /></IntroCopy>
              <IntroCopy index="1">See <Link to="clients">who i{'\''}ve worked with</Link></IntroCopy>
            </Intro>

          </div>
        </IntroRoot>

        <ServicesContainer>
          <ServicesList
            heading="What I do"
            services={services}
          >
            <br />
            <p><BoldLink to="about">Find out more</BoldLink></p>
          </ServicesList>
        </ServicesContainer>

      </PageContainer>
    );
  }
}

HomePage.propTypes = {
  services: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  services: selectServices()
});

const withConnect = connect(mapStateToProps, {});

export default compose(
  withConnect
)(HomePage);
