import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import H1 from 'components/H1';
import H2 from 'components/H2';
import TreeList from 'components/TreeList';
import PageCta from 'components/PageCta';
import PageContainer from '../PageContainer';
import { selectClientsData } from './selectors';

export class ClientsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { clients } = this.props;

    return (
      <PageContainer smallWidth>

        <Helmet
          title="Clients"
          meta={[
            { name: 'description', content: 'Some of the projects i\'ve been a part of' },
          ]}
        />

        <H1 hide>Clients</H1>

        <H2 h1Size>I{'\''}ve worked with some great people</H2>

        <TreeList
          data={clients}
          largeGroupHeight
        />

        <PageCta
          heading="Maybe we could build something together?"
          contactCopy="Send me a message"
          noMarginOnSmallScreen
          secondCta={(
            <div>
              <p><Link to="about">Read about me</Link></p>
              <p><Link to="technologies">See the technologies i{'\''}ve been using</Link></p>
            </div>
          )}
        />

      </PageContainer>
    );
  }
}

ClientsPage.propTypes = {
  clients: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  clients: selectClientsData()
});

const withConnect = connect(mapStateToProps, null);

export default compose(
  withConnect
)(ClientsPage);
