import { motion } from 'framer-motion';
import { mapTechnologyGroups } from '@/helpers/map-technologies-array';
import TextSection from '@/components/TextSection';

const groups = mapTechnologyGroups();

const TechnicalList = () => (
  <>
    {groups.map((group) => (
      <TextSection
        key={group.TITLE}
        largePadding={false}
        id={group.TITLE}
      >
        <h3>{group.TITLE}</h3>

        {group.ITEMS ? (
          <ul
            className='tag-list no-margin'
            aria-label={`Tony's ${group.TITLE} technical skills`}
          >
            {group.ITEMS.map((tech) => {
              return (
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: .5 } }}
                  viewport={{ once: true }}
                  key={tech.text}
                  className={`tag-list-item ${tech.className}`}
                >
                  {tech.text}
                </motion.li>
              );
            })}
          </ul>
        ) : null}
      </TextSection>
    ))}
  </>
);

export default TechnicalList;