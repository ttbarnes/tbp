import DevProjectListItem from './projectListItem';

const DevProjectsList = ({ devProjects, onProjectClick }) => (
  <section>
    <ul>
      {devProjects.map(project =>
        <DevProjectListItem
          key={project.id}
          {...project}
          onClick={() => onProjectClick(project.id)}
        />
      )}
    </ul>
  </section>
);

export default DevProjectsList;
