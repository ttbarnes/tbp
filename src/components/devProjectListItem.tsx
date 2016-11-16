import { Link } from 'react-router';

const DevProjectListItem = ({ onClick, title, id }) => (
  <li>
    <Link onClick={onClick}
          to={`/dev/project/${id}`}
    >
      {title}
    </Link>
  </li>
);

export default DevProjectListItem;
