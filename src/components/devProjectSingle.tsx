const DevProjectSingle = ({ project }) => (
  <div>
    { project ? (
      <div>
        <h2>{project.title}</h2>
        <p>id: {project.id}</p>
        <p>category: {project.category}</p>
      </div>
    ) : (
      <div>
        <p>oh no, apparently this project doesn't exist. :(</p>
      </div>
    )}
  </div>

);

export default DevProjectSingle;
