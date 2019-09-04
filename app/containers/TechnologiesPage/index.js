import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H4 from 'components/H4';
import TreeList from 'components/TreeList';
import PageCta from 'components/PageCta';
import { FadeIn } from 'components/styledShared';
import PageContainer from '../PageContainer';
import {
  selectTech
} from './selectors';
import {
  Row,
  StyledList,
  StyledTag
} from './styled';

export const renderGroup = (group, isLast) => {
  const groupTags = group.tags;
  return (
    <Row isLast={isLast}>
      <FadeIn>
        <H4>{group.heading}</H4>

        <StyledList className="no-li-margin">
          {groupTags.map((tag, i) => (
            <StyledTag
              type={tag}
              key={i}
              index={i + 1}
              backgroundTheme
              large
            />
          ))}
        </StyledList>

      </FadeIn>
    </Row>
  );
};

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
            { name: 'description', content: 'I learn and use the best tools for the job' },
          ]}
        />

        <H1 hide>I learn and use the best tools for the job</H1>

        <H2 h1Size>I learn and use the best tools for the job</H2>

        <TreeList
          data={tech}
        />

        <PageCta
          heading="Maybe we could build something together?"
          contactCopy="Send me a message"
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
