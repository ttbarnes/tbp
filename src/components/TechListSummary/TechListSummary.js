import mapTechnologiesArray from '@/helpers/map-technologies-array';
import styles from './TechListSummary.module.scss';

const TechListSummary = () => {
  const technologies = mapTechnologiesArray();
  
  return (
    <ul
      className='tag-list'
      aria-label="Some of Tony's technical skills"
    >
      {technologies.map((tech) => {
        return (
          <li
            key={tech.text}
            className={`tag-list-item ${styles[tech.className]}`}
          >
            {tech.text}
          </li>
        );
      })}
    </ul>
  );
};

export default TechListSummary;
