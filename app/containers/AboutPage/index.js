import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import LazyLoad from 'react-lazyload';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FadeIn } from 'components/styledShared';
import PageContainer from '../PageContainer';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import List from '../../components/List';
import {
  selectAboutTech
} from './selectors';
import {
  Intro,
  Row,
  StyledList,
  StyledTag,
  TechList
} from './styled';

const groupsWithStyledTag = [
  'lately',
  'api',
  'testing',
  'styling',
  'other'
];

export const renderGroup = (group) => {
  const category = group.category;
  const groupTags = group.tags;
  if (groupsWithStyledTag.includes(category)) {
    return (
      <StyledList>
        {groupTags.map((tag, i) =>
          <StyledTag
            type={tag}
            key={i}
            index={i + 1}
            backgroundTheme
          />
        )}
      </StyledList>
    );
  } else if (groupTags && !groupsWithStyledTag.includes(category)) {
    return (
      <List showListStyle>
        {groupTags.map((i) =>
          <p key={i}>{i}</p>
        )}
      </List>
    );
  } else if (category === 'outro') {
    return (
      <div>
        <p><a href="/contact">Get in touch</a></p>
        <p>Check out <a href="/projects">some of the projects i{'\''}ve worked on</a></p>
      </div>
    );
  }
  return <p>{group.copy}</p>;
};

export const renderAboutSection = (group, isLast) =>
  <Row isLast={isLast}>
    <FadeIn>
      <H3>{group.heading}</H3>
      {renderGroup(group)}
    </FadeIn>
  </Row>;

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      tech
    } = this.props;

    return (
      <PageContainer>

        <Helmet
          title="About"
          meta={[
            { name: 'description', content: 'About Tony Barnes' },
          ]}
        />

        <H1 hide>About</H1>

        <Intro>
          <H2 h1Size>A passionate front end/javascript developer</H2>
          <p>With many years of experience, I strive for clean and scalable solutions.</p>

          <p>I really enjoy integrating large complex data into a pleasurable, easy-to-use UI. I generally like to help others and make things easier.</p>

          <p>Thriving on the latest technologies, I am constantly improving my skill set.</p>

          <p>I{'\''}m currently making money transfers easier with <a href="https://www.worldremit.com" target="_blank" rel="noopener">WorldRemit</a>.{' '}Previously built FinTech UI{'\''}s with Siren, hypermedia based APIs at <a href="https://www.ihs.com" target="_blank" rel="noopener">IHS Markit.</a>{' '}</p>
          <p>Recently helped change the world of travel at <a href="http://trainline.com" target="_blank" rel="noopener">Trainline</a> and built some awesome interfaces with <a href="http://johnlewis.co.uk" target="_blank" rel="noopener">John Lewis</a>. I{'\''}ve also helped to deliver many multilingual/multi-country projects.</p>

          <p>On the side i{'\''}m building an app that combines various APIs from music platforms, as well as some tools/UIs that will assist crypto currency traders.
          Previously built a <a href="https://github.com/therapy-records" target="_blank" rel="noopener">CMS</a> and worked on a <a href="http://www.plantstove.com" target="_blank" rel="noopener">startup idea</a>.</p>
        </Intro>

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

AboutPage.propTypes = {
  tech: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  tech: selectAboutTech()
});

const withConnect = connect(mapStateToProps, {});

export default compose(
  withConnect
)(AboutPage);
