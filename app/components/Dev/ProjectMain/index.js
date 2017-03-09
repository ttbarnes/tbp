import React from 'react';
import Helmet from 'react-helmet';
import H2 from 'components/H2';
import {
  ListFlex,
  ListFlexItem
} from './styled';

function DevProjectMain(props) {
  const project = props.project.toJS();

  const getProjectImage = (itemId) =>
    require(`../../../assets/img/dev/${itemId}/01.jpg`); // eslint-disable-line global-require

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
          <p><small>{project.category}, {project.date}</small></p>

          <img src={getProjectImage(project.id)} alt={project.name} />

          <h4>Tech</h4>
          <ul>
            {project.tech.map((item) =>
              <li key={item.tag} className={`tech-tag ${item.tag}`}>{item.tag}</li>
            )}
          </ul>
          <h4>Highlights</h4>
          <ul>
            {project.deliverItems.map((item) =>
              <li key={item}>{item}</li>
            )}
          </ul>

          <ListFlex className="no-list-style">
            {project.urls && project.urls.map((item) =>
              <ListFlexItem key={item}>
                <button>
                  {item.includes('github') ? (
                    'github repo'
                  ) : (
                    'View the live site'
                  )}
                </button>
              </ListFlexItem>
            )}
          </ListFlex>

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
  project: React.PropTypes.object.isRequired
};

export default DevProjectMain;
