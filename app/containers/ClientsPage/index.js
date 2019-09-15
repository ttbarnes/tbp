import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import H1 from 'components/H1';
import H2 from 'components/H2';
import ClientsSummary from 'components/ClientsSummary';
import TreeList from 'components/TreeList';
import PageCta from 'components/PageCta';
import PageContainer from '../PageContainer';
import {
  selectClientsSummary,
  selectClientsData
} from './selectors';

export class ClientsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      clientsSummary,
      clients
    } = this.props;

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

        <ClientsSummary clients={clientsSummary} />

        <TreeList
          data={clients}
          largeGroupHeight
        />

        <PageCta
          heading="Maybe we could build something together?"
          contactCopy="Send me a message"
          secondCta={<p><Link to="about">Read about me</Link></p>}
        />

      </PageContainer>
    );
  }
}

ClientsPage.propTypes = {
  clientsSummary: PropTypes.array.isRequired,
  clients: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  clientsSummary: selectClientsSummary(),
  clients: selectClientsData()
});

const withConnect = connect(mapStateToProps, null);

export default compose(
  withConnect
)(ClientsPage);
