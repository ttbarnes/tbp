import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import List from '../../components/List';
import PageLink from '../../components/PageLink';
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

        <H1 hide>About</H1>
        <StyledSection>
          <H2 h1Size>A passionate front end/javascript developer</H2>
          <p>With X years of experience, I strive for clean and scalable solutions.</p>

          <p>I really enjoy integrating large complex data into a pleasurable, easy-to-use UI. I generally like to help others and make things easier.</p>

          <p>Thriving on the latest technologies, I am constantly improving my skill set.</p>

          <p>I{'\''}m currently helping to change the world of travel at <Link to="http://trainline.com" target="_blank">Trainline</Link>. On the side i{'\''}m building a <Link to="http://plantstove.com" target="_blank">new startup idea</Link>. Also creating a <Link to="https://github.com/therapy-records" target="_blank">mini CMS</Link>. Previously built a <Link to="https://github.com/ttbarnes/mean-tweets" target="_blank">mean tweets app</Link>.</p>
        </StyledSection>

        <StyledSection>
          <H3>Recently I{'\''}ve been using...</H3>
          <StyledList>
            {renderTechGroup(tech, 'lately')}
          </StyledList>
        </StyledSection>

        <StyledSection>
          <H3>..and building api{'\''}s with...</H3>
          <StyledList>
            {renderTechGroup(tech, 'api')}
          </StyledList>
        </StyledSection>

        <StyledSection>
          <H3>I usually test with</H3>

          <StyledList>
            {renderTechGroup(tech, 'testing')}
          </StyledList>
        </StyledSection>

        <StyledSection>
          <H3>..and style with all the similar things</H3>

          <StyledList>
            {renderTechGroup(tech, 'styling')}
          </StyledList>
        </StyledSection>

        <StyledSection>
          <H3>I{'\''}ve used these as well</H3>

          <StyledList>
            {renderTechGroup(tech, 'other')}
          </StyledList>
        </StyledSection>

        <StyledSection>
          <H3>I{'\''}ve worked in a few sectors</H3>
          <List showListStyle>
            <p>Ecommerce</p>
            <p>Health</p>
            <p>Travel</p>
            <p>Fin-tech</p>
            <p>Book Publishing</p>
            <p>Mortgage comparison</p>
            <p>many more</p>
          </List>
        </StyledSection>

        <StyledSection>
          <H3>..with large and small teams</H3>
          <p>Ecommerce giants, new startups, {'\''}cool{'\''} agencies, you name it.</p>
        </StyledSection>

        <StyledSection>
          <H3>I{'\''}ve used these before</H3>
          <List showListStyle>
            <p>Photoshop, Fireworks, Sketch</p>
            <p>Atlassian tools, Github</p>
            <p>Heroku, Firebase</p>
          </List>
        </StyledSection>

        <StyledSection>
          <H3>I like keyboard shortcuts</H3>
          <p>..and pretty quick at typing. Very creative - i{'\''}m a pianist and create music. I find unit tests quite satisfying.</p>
        </StyledSection>

        <PageLink to="/projects">View projects</PageLink>

        <PageLink to="/contact">Contact</PageLink>

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

