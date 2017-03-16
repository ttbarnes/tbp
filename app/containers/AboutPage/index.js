import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
// import { Link } from 'react-router';
import H1 from '../../components/H1';
import List from '../../components/List';
import Tag from '../../components/Tag';
// import CV from '../../assets/Tony-Barnes-CV-2017.pdf';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectAboutTech
} from './selectors';
// import { FadeIn } from './styled';

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
      <Tag type={i} key={i} />
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
        <p>I am a passionate front end {'/'} javascript {'/'} angular {'/'} full stack JS developer with many ambitions.</p>
        <p>I have a lot of experience with many market sectors such as ecommerce, health, travel, fin-tech, book publishing, mortgage comparison and more. I have led and grown front end teams and always ensure that clean, scalable solutions are delivered.</p>
        <p>I really enjoy collaborating and open source projects. I{'\''}ve built or contributed to 17 angular apps in 2 years – 3 including full stack JS. I{'\''}ve worked closely with many developers in various environments utilising agile/scrum methodologies. Thriving on the latest technologies, I am constantly improving my skill set. I{'\''}m currently building a new startup idea utilising the MEAN stack. Previously built a {'\''}mini twitter{'\''}. My current venture is React.</p>
        {/* <p>Download <Link to={CV} target="_blank">CV</Link>( ? )</p> */}

        <p>Some tech i{'\''}ve been using lately:</p>
        <List>
          {renderTechGroup(tech, 'lately')}
        </List>

        <br />
        <br />

        <p>I usually write tests with:</p>

        <List>
          {renderTechGroup(tech, 'testing')}
        </List>

        <br />
        <br />
        <p>..and I can style with all the syntactically similar things:</p>

        <List>
          {renderTechGroup(tech, 'styling')}
        </List>

        <p>Some other things I know</p>

        <List>
          {renderTechGroup(tech, 'other')}
        </List>

        <p>I used to use jQuery, Grunt and SVN, but I won{'\''}t go into details.</p>

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

