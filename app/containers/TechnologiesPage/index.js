import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import LazyLoad from 'react-lazyload';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import { FadeIn } from 'components/styledShared';
import List from 'components/List';
import PageContainer from '../PageContainer';
import {
  selectTech
} from './selectors';
import {
  TechList,
  Row,
  StyledList,
  StyledTag
} from './styled';

const groupsWithStyledTag = [
  'lately',
  'api',
  'testing',
  'styling',
  'other'
];

export const renderGroup = (group) => {
  const { category } = group;
  const groupTags = group.tags;
  if (groupsWithStyledTag.includes(category)) {
    return (
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
    );
  }
  if (groupTags && !groupsWithStyledTag.includes(category)) {
    return (
      <List showListStyle>
        {groupTags.map((i) => <p key={i}>{i}</p>)}
      </List>
    );
  }
  if (category === 'outro') {
    return (
      <div>
        <p><Link to="contact">Send me a message</Link></p>
        <p><Link to="clients">See who I{'\''}ve worked with</Link></p>
      </div>
    );
  }
  return <p>{group.copy}</p>;
};

export const renderAboutSection = (group, isLast) => (
  <Row isLast={isLast}>
    <FadeIn>
      <H3>{group.heading}</H3>
      {renderGroup(group)}
    </FadeIn>
  </Row>
);

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
            { name: 'description', content: 'TODO' },
          ]}
        />

        <H1 hide>Projects</H1>

        <H2 h1Size>Technologies</H2>

        <TechList>
          {tech.map((item, index) => {
            const isLast = tech.length - 1 === index;
            return (
              <li key={item.heading}>
                <LazyLoad height={400} once>
                  {renderAboutSection(
                    item,
                    isLast
                  )}
                </LazyLoad>
              </li>
            );
          })}
        </TechList>

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
