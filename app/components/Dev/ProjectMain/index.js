import React from 'react';
import Helmet from 'react-helmet';
import {
  // RootFlex,
  // FlexCol,
  ListFlex,
  ListFlexItem
} from './styled';

function DevProjectMain(props) {
  const project = props.project.toJS();
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
          <h2>{project.name}</h2>
          <p><small>{project.category}, {project.date}</small></p>

          {
            // temp solution for image
            // currently, strangely unable to load dynamic image url
          }
          <img src="http://tonybarnes.me/images/showcase/saranac/01.jpg" alt="test" />

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
