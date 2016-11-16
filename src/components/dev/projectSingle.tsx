import * as Radium from 'radium';

const tempStyles = {
  float: 'left',
  marginRight: '1rem'
};

const DevProjectSingle = ({ project }) => (
  <div>
    { project ? (
      <div>
        <img src="http://placekitten.com/220/220" style={tempStyles} />
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

export default (Radium(DevProjectSingle));
