import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import PageContainer from '../PageContainer';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import PageCta from '../../components/PageCta';
import ServicesList from '../../components/ServicesList';
import { selectServices } from '../../selectors/services';
import { Intro } from './styled';

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      services
    } = this.props;

    return (
      <PageContainer smallWidth>

        <Helmet
          title="About"
          meta={[
            { name: 'description', content: 'A creative engineer with a passion' },
          ]}
        />

        <H1 hide>About</H1>

        <Intro>
          <H2 h1Size>A creative engineer with a passion</H2>

          <p>I thoroughly enjoy understanding people{'\''}s needs and wants. I love taking concepts from the drawing board to a fully fledged application that is a pleasure to use.</p>

          <p>I{'\''}ve worked with many individuals, teams and businesses over the years - ranging from startups and SMEs to large corporations in a wide range of industries.</p>

          <p>I have found that breaking a project down into smaller, modular chunks is absolutely essential not only for engineering, but for collaboration, communication and feedback with all stakeholders. By working in an agile way, the product/app can be built and delivered incrementally. This in turn ensures high quality, real world results.</p>

          <p>Striving for clean and scalable solutions, I make sure that the right tools are used for the job - there{'\''}s no need to reinvent the wheel.</p>

          <p>Recently, I{'\''}ve been making money transfers easier with <a href="https://www.worldremit.com" target="_blank" rel="noopener">WorldRemit</a> and building bespoke Content Management Systems. Also helped change the world of travel at <a href="http://trainline.com" target="_blank" rel="noopener">Trainline</a> and replatformed interfaces with <a href="http://johnlewis.co.uk" target="_blank" rel="noopener">John Lewis</a>. I{'\''}ve worked with some <Link to="clients">great people</Link>.</p>
        </Intro>

        <ServicesList
          heading="What I can help with"
          services={services}
        />

        <PageCta
          heading="Maybe I could help you?"
          contactCopy="I'd love to talk"
          noMargin
          centerText
        />

      </PageContainer>
    );
  }
}

AboutPage.propTypes = {
  services: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  services: selectServices()
});

const withConnect = connect(mapStateToProps, {});

export default compose(
  withConnect
)(AboutPage);
