import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import H1 from 'components/H1';
import H2 from 'components/H2';
import TreeList from 'components/TreeList';
import PageCta from 'components/PageCta';
import PageContainer from '../PageContainer';
import {
  selectTech
} from './selectors';
import { TreeListContainer } from './styled';

export class TechnologiesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      tech
    } = this.props;

    return (
      <PageContainer smallWidth>

        <Helmet
          title="Technologies"
          meta={[
            { name: 'description', content: 'I use the best tools for the job' },
          ]}
        />

        <H1 hide>Technologies</H1>

        <H2 h1Size>I use the best tools for the job</H2>

        <TreeListContainer>
          <TreeList
            data={tech}
          />
        </TreeListContainer>

        <PageCta
          heading="Maybe we could build something together?"
          contactCopy="Send me a message"
          noMarginOnSmallScreen
        />

      </PageContainer>
    );
  }
}

TechnologiesPage.propTypes = {
  tech: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  tech: selectTech()
});

const withConnect = connect(mapStateToProps, null);

export default compose(
  withConnect
)(TechnologiesPage);
