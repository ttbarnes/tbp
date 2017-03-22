import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H4 from 'components/H4';
import Tag from 'components/Tag';
import List from 'components/List';
import Img from 'components/Img';
import PageLink from 'components/PageLink';
import {
  getProjectImage,
  ThoughtsItem
} from './details';
import {
  Root,
  HeadingWrap,
  Row,
  SmallDate,
  ListFlex
} from './styled';

export class ProjectSingle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      data
    } = this.props;

    // todo: redirect to error page or show error
    if (!data) {
      return null;
    }

    const project = data;

    if (project && project.mini === true) {
      return null;
    }

    return (
      <Root>

        <Helmet
          title={(project && project.name) ? project.name : 'Project'}
          meta={[
            { name: 'description', content: 'Dev things' }
          ]}
        />

        <section>
          <H1 hide>{project.name}</H1>
          <HeadingWrap>
            <H2>{project.name}</H2>
            <SmallDate>{project.date}</SmallDate>
          </HeadingWrap>

          <Img src={getProjectImage(project.id)} alt={project.name} />

          <Row>
            <H4>Tech</H4>
            <ListFlex>
              {project.tech.map((item, index) =>
                <Tag type={item} key={index} />
              )}
            </ListFlex>
          </Row>

          {project.highlights && (
            <Row>
              <H4>Highlights</H4>
              <List showListStyle>
                {project.highlights}
              </List>
            </Row>
          )}

          {project.thoughts && (
            <Row>
              {project.thoughts.map((item, index) =>
                <ThoughtsItem
                  item={item}
                  projectId={project.id}
                  projectName={project.name}
                  key={index}
                />
              )}
            </Row>
          )}

          {project.urls && (
            <Row>
              <H4>Links</H4>
              <List showListStyle>
                {project.urls.map((item) =>
                  <Link to={item} target="_blank" key={item}>
                    {item.includes('github.com') ? (
                      'GitHub repo'
                    ) : (
                      'Live site'
                    )}
                  </Link>
                )}
              </List>
            </Row>
          )}

          <PageLink to="/projects">All projects</PageLink>

        </section>

      </Root>
    );
  }
}

ProjectSingle.propTypes = {
  data: PropTypes.object
};

export default ProjectSingle;
