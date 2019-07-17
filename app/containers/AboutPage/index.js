import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
// import LazyLoad from 'react-lazyload';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
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
  StyledTag
  // TechList
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
      <StyledList className="no-li-margin">
        {groupTags.map((tag, i) =>
          <StyledTag
            type={tag}
            key={i}
            index={i + 1}
            backgroundTheme
            large
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
        <p><Link to="contact">Send me a message</Link></p>
        <p><Link to="clients">See who i{'\''}ve worked with</Link></p>
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
    // const {
    //   tech
    // } = this.props;

    return (
      <PageContainer>

        <Helmet
          title="About"
          meta={[
            { name: 'description', content: 'A creative engineer with a passion' },
          ]}
        />

        <H1 hide>About</H1>

        <Intro>

          <H2 h1Size>A creative engineer with a passion</H2>
          <p>Specialising in bespoke web app development, i{'\''}ve worked with many individuals, teams and businesses over the years - ranging from startups and SMEs to large corporations in a wide range of industries.</p>

          <p>I thoroughly enjoy understanding people{'\''}s needs and wants. I love taking concepts from the drawing board to a fully fledged application that is a pleasure to use.</p>

          <p>I have found that breaking a project down into smaller, modular chunks is absolutely essential not only for engineering, but for collaboration, communication and feedback with all stakeholders. By working in an agile way, the product/app can be built and delivered incrementally. This in turn ensures high quality, real world results.</p>

          <p>Striving for clean and scalable solutions, I make sure that the right tools are used for the job - there{'\''}s no need to reinvent the wheel.</p>

          <p>Recently, i{'\''}ve been making money transfers easier with <a href="https://www.worldremit.com" target="_blank" rel="noopener">WorldRemit</a> and building bespoke Content Management Systems. Also helped change the world of travel at <a href="http://trainline.com" target="_blank" rel="noopener">Trainline</a> and replatformed interfaces with <a href="http://johnlewis.co.uk" target="_blank" rel="noopener">John Lewis</a>. I{'\''}ve worked with some <Link to="clients">great people</Link>.</p>

          <p>I love to help - maybe we could talk? <a href="mailto:tony@tonybarnes.me">tony{'@'}tonybarnes.me</a></p>

        </Intro>

        {/*
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
        */}

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
