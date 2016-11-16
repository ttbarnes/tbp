import DevProjectFilterLink from '../../containers/devProjectFilterLink';
import styles from './projectFilters.styles';

const ProjectFilters = () => (
  <p>
    Filter by:

    <br/>

    <DevProjectFilterLink filter="SHOW_ALL" styles={styles}>
      All
    </DevProjectFilterLink>

    <DevProjectFilterLink filter="SHOW_CATEGORY_REACT" styles={styles}>
      React
    </DevProjectFilterLink>

    <DevProjectFilterLink filter="SHOW_CATEGORY_ANGULAR" styles={styles}>
      Angular
    </DevProjectFilterLink>

    <DevProjectFilterLink filter="SHOW_CATEGORY_STATIC" styles={styles}>
      Static
    </DevProjectFilterLink>

    <DevProjectFilterLink filter="SHOW_CATEGORY_OTHER" styles={styles}>
      Other
    </DevProjectFilterLink>

  </p>
);

export default ProjectFilters;
