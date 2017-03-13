import React from 'react';
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

function DevProjectMain(props) {
  const project = props.project && props.project.toJS();

  if (project.mini === true) {
    // todo: redirect to error page or show error
    return null;
  }

  return (
    <article>

      <Helmet
        title={(project && project.name) ? project.name : 'Project'}
        meta={[
          { name: 'description', content: 'Dev things' },
        ]}
      />

      {project ? (
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
              <FlexItem>
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
      ) : (
        <section>
          <p>oh no, apparently this project does not exist :(</p>
        </section>
      )}

    </article>
  );
}

DevProjectMain.propTypes = {
  project: React.PropTypes.object
};

export default DevProjectMain;
