import { mapTechnologyGroups } from '@/helpers/map-technologies-array';
import TechnicalListGroup from './TechnicalListGroup';
import styles from './TechnicalList.module.scss';

const groups = mapTechnologyGroups();

const TechnicalList = () => (
  <div className={styles.container}>
    {groups.map((group) => (
      <TechnicalListGroup
        key={group.TITLE}
        title={group.TITLE}
        items={group.ITEMS}
      />
    ))}
  </div>
);

export default TechnicalList;
