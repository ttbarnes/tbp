import { mapTechnologyGroups } from '@/helpers/map-technologies-array';
import TextSection from '@/components/TextSection';
// TODO - extract
import styles from '../../components/TechListSummary/TechListSummary.module.scss';

const groups = mapTechnologyGroups();

// TODO: should the aria label be "skills for X group"

const TechnicalList = () => (
  <>
    {groups.map((group) => (
      <TextSection
        key={group.TITLE}
        largePadding={false}
      >
        <h3 id={group.TITLE}>{group.TITLE}</h3>

        {group.ITEMS ? (
          <ul
            className='tag-list no-margin'
            aria-label={`Tony's ${group.TITLE} technical skills`}
          >
            {group.ITEMS.map((tech) => {
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
        ) : null}
      </TextSection>
    ))}
  </>
);

export default TechnicalList;
