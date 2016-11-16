import DevProjectListItem from './devProjectListItem';

const DevProjectsList = ({ devProjects, onProjectClick }) => (
  <ul>
    {devProjects.map(project =>
      <DevProjectListItem
        key={project.id}
        {...project}
        onClick={() => onProjectClick(project.id)}
      />
    )}
  </ul>
);

export default DevProjectsList;
