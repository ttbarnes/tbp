import { mapTechnologyGroups } from '@/helpers/map-technologies-array';
import TechnicalListGroup from './TechnicalListGroup';

const groups = mapTechnologyGroups();

const TechnicalList = () => (
  <>
    {groups.map((group) =>
      <TechnicalListGroup
        key={group.TITLE}
        title={group.TITLE}
        items={group.ITEMS}
      />
    )}
  </>
);

export default TechnicalList;
