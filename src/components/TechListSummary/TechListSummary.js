import mapTechnologiesSummary from '@/helpers/map-technologies-array';

const technologies = mapTechnologiesSummary();

const TechListSummary = () => (
  <ul
    className='tag-list'
    aria-label="Some of Tony's technical skills"
  >
    {technologies.map((tech) => {
      return (
        <li
          key={tech.text}
          className={`tag-list-item ${tech.className}`}
        >
          {tech.text}
        </li>
      );
    })}
  </ul>
);

export default TechListSummary;
