import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
// import { Link } from 'react-router';
import H1 from '../../components/H1';
import List from '../../components/List';
// import CV from '../../assets/Tony-Barnes-CV-2017.pdf';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectAboutTech
} from './selectors';
// import { FadeIn } from './styled';
import {
  StyledSection,
  StyledList,
  StyledTag
} from './styled';

export const techGroup = (arr, group) =>
  arr.filter((t) => {
    if (t.group === group) {
      return t.tags;
    }
    return null;
  });

export const renderTechGroup = (arr, groupType) => {
  const group = this.techGroup(arr, groupType);
  if (group.length) {
    return group[0].tags.map((i) =>
      <StyledTag type={i} key={i} />
    );
  }
  return null;
};

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

        <H1>About</H1>
        <StyledSection>
          <p>todo: add X years experience</p>
          <p>I am a passionate front end {'/'} javascript {'/'} angular {'/'} full stack JS developer with many ambitions.</p>
          <p>Striving for clean and scalable solutions, I thrive on the latest technologies. I am constantly improving my skill set. I{'\''}m currently building a new startup idea utilising the MEAN stack. Also creating a mini CMS with React. Previously built a {'\''}mini twitter{'\''}.</p>
          <p>I really enjoy collaborating. I{'\''}ve built or contributed to 17 angular apps in 2 years – 3 including full stack JS.</p>
          <p>I{'\''}ve worked closely with many developers in various environments, of course with agile/scrum {':)'}</p>
        </StyledSection>

        <StyledSection>
          <p>I have a lot of experience with many market sectors such as:</p>
          <List showListStyle>
            <p>Ecommerce</p>
            <p>Health</p>
            <p>Travel</p>
            <p>Fin-tech</p>
            <p>Book Publishing</p>
            <p>Mortgage comparison</p>
            <p>many more</p>
          </List>
          {/* <p>Download <Link to={CV} target="_blank">CV</Link>( ? )</p> */}
        </StyledSection>

        <StyledSection>
          <p>Some tech i{'\''}ve been using lately:</p>
          <StyledList>
            {renderTechGroup(tech, 'lately')}
          </StyledList>
        </StyledSection>

        <StyledSection>
          <p>I usually write tests with:</p>

          <StyledList>
            {renderTechGroup(tech, 'testing')}
          </StyledList>
        </StyledSection>

        <StyledSection>
          <p>..and I style with all the similar things:</p>

          <StyledList>
            {renderTechGroup(tech, 'styling')}
          </StyledList>
        </StyledSection>

        <StyledSection>
          <p>Some other things I know:</p>

          <StyledList>
            {renderTechGroup(tech, 'other')}
          </StyledList>
        </StyledSection>

        <StyledSection>
          <p>Previously I used jQuery, Grunt and SVN...</p>
        </StyledSection>

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

export default connect(mapStateToProps)(AboutPage);

