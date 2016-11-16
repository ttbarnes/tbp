import DevProjectFilterLink from '../containers/devProjectFilterLink';

const ProjectFilters = () => (
  <p>
    Filter by:

    <br/>

    <DevProjectFilterLink filter="SHOW_ALL">
      All
    </DevProjectFilterLink>

    <DevProjectFilterLink filter="SHOW_CATEGORY_REACT">
      React
    </DevProjectFilterLink>

    <DevProjectFilterLink filter="SHOW_CATEGORY_ANGULAR">
      Angular
    </DevProjectFilterLink>

    <DevProjectFilterLink filter="SHOW_CATEGORY_STATIC">
      Static
    </DevProjectFilterLink>

    <DevProjectFilterLink filter="SHOW_CATEGORY_OTHER">
      Other
    </DevProjectFilterLink>

  </p>
);

export default ProjectFilters;
