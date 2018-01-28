import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import LazyLoad from 'react-lazyload';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FadeInLong } from 'components/styledShared';
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
  const category = group.category;
  const groupTags = group.tags;
  if (groupsWithStyledTag.includes(category)) {
    return (
      <StyledList>
        {groupTags.map((tag, i) =>
          <StyledTag type={tag} key={i} index={i + 1} />
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

export const renderAboutSection = (group) =>
  <Row>
    <FadeInLong>
      <H3>{group.heading}</H3>
      {renderGroup(group)}
    </FadeInLong>
  </Row>;

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      tech
    } = this.props;

    return (
      <article>

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

          <p>I{'\''}m currently consuming Siren, hypermedia based APIs to build FinTech UI{'\''}s at <a href="https://www.ihs.com" target="_blank" rel="noopener">IHS Markit.</a>{' '}
           Recently helped change the world of travel at <a href="http://trainline.com" target="_blank" rel="noopener">Trainline</a> and built some awesome interfaces with <a href="http://johnlewis.co.uk" target="_blank" rel="noopener">John Lewis</a>.
           On the side I{'\''}m building a <a href="http://www.plantstove.com" target="_blank" rel="noopener">new startup idea</a>.
           Also creating a <a href="https://github.com/therapy-records" target="_blank" rel="noopener">CMS</a>.
           Previously built a <a href="https://github.com/ttbarnes/mean-tweets" target="_blank">mean tweets app</a>.</p>
        </Intro>

        <ul>
          {tech.map((item) =>
            <li key={item.heading}>
              <LazyLoad height={400} once>
                {renderAboutSection(
                  item
                )}
              </LazyLoad>
            </li>
          )}
        </ul>

      </article>
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
