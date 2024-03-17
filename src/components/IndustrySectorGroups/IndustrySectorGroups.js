import { CLIENTS_PROJECTS } from '@/content-strings';
import IndustrySectorGroup from '@/components/IndustrySectorGroups/Group';
import styles from './IndustrySectorGroups.module.scss';

const IndustrySectorGroups = () => (
  <ul
    aria-label='Groups of industries Tony has worked in'
    className={styles.container}
  >
    {CLIENTS_PROJECTS.map((group) => (
      <IndustrySectorGroup
        key={group.heading}
        group={group}
      />
    ))}

    <IndustrySectorGroup
      key='And many more...'
      group={{
        heading: 'And many more...'
      }}
    />
  </ul>
);

export default IndustrySectorGroups;
