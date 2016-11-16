import { Link } from 'react-router';
import * as Radium from 'radium';
import styles from './projectListItem.styles';

const DevProjectListItem = ({ onClick, title, id }) => (
  <li className="col-25" style={styles.col}>
    <Link onClick={onClick}
          to={`/dev/project/${id}`}
          style={styles.link}
    >
      {title}
    </Link>
  </li>
);

export default (Radium(DevProjectListItem));
