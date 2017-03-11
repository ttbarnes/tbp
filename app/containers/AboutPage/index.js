import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import H1 from '../../components/H1';
import CV from '../../assets/Tony-Barnes-CV-2017.pdf';

export class AboutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
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
        <p>I have a lot of experience with many market sectors such as ecommerce, health, fin-tech, book publishing, mortgage comparison and many more. I have led and grown front end teams - managing both business and development requirements whilst ensuring that clean, scalable solutions are delivered.</p>
        <p>I really enjoy collaborating and open source projects. I{'\''}ve built or contributed to 17 angular apps in 2 years – 3 including full stack JS. I{'\''}ve worked closely with many developers in various environments utilising agile/scrum methodologies. Thriving on the latest technologies, I am constantly improving my skill set. I{'\''}m currently building a new startup idea utilising the MEAN stack. Previously built a {'\''}mini twitter{'\''}. My current venture is React.</p>
        <p>Download <Link to={CV} target="_blank">CV</Link>( ? )</p>
      </article>
    );
  }
}

export default (AboutPage);
