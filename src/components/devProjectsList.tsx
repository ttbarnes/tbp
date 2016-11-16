import DevProjectListItem from './devProjectListItem';

const DevProjectsList = ({ devProjects, onTodoClick }) => (
  <ul>
    {devProjects.map(project =>
      <DevProjectListItem
        key={project.id}
        {...project}
        onClick={() => onTodoClick(project.id)}
      />
    )}
  </ul>
);

export default DevProjectsList;
