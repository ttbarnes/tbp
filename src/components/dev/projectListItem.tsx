import { Link } from 'react-router';

const DevProjectListItem = ({ onClick, title, id }) => (
  <li className="col-25">
    <Link onClick={onClick}
          to={`/dev/project/${id}`}
    >
      {title}
    </Link>
  </li>
);

export default DevProjectListItem;
