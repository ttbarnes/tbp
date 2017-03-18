import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import H2 from 'components/H2';
import H4 from 'components/H4';
import Tag from 'components/Tag';
import List from 'components/List';
import Img from 'components/Img';
import {
  getProjectImage,
  ThoughtsItem
} from './details';
import {
  ListFlex,
  FlexItem
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
      <article>

        <Helmet
          title={(project && project.name) ? project.name : 'Project'}
          meta={[
            { name: 'description', content: 'Dev things' }
          ]}
        />

        <section>
          <H2>{project.name}</H2>
          <p><small>{project.date}</small></p>

          <Img src={getProjectImage(project.id)} alt={project.name} />

          <H4>Tech</H4>
          <ListFlex>
            {project.tech.map((item, index) =>
              <Tag type={item} key={index} />
            )}
          </ListFlex>

          <H4>Highlights</H4>
          <List showListStyle>
            {project.highlights}
          </List>

          {project.thoughts && project.thoughts.map((item, index) =>
            <ThoughtsItem
              item={item}
              projectId={project.id}
              projectName={project.name}
              key={index}
            />
          )}

          <section>
            {project.urls && project.urls.map((item) =>
              <FlexItem key={item}>
                <button>
                  {item.includes('github') ? (
                    'github repo'
                  ) : (
                    'View the live site'
                  )}
                </button>
              </FlexItem>
            )}
          </section>

        </section>

      </article>
    );
  }
}

ProjectSingle.propTypes = {
  data: PropTypes.object
};

export default ProjectSingle;
