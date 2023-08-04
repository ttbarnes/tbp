import Link from 'next/link';
import TextSection from '@/components/TextSection';
import TechListSummary from '@/components/TechListSummary';
import { ROUTES } from '@/constants';

const TechnicalSkills = () => (
  <TextSection
    backgroundColor='black'
    textColor='white'
  >
    <h2>Some of my technical skills</h2>
    <p>In no particular order</p>

    <TechListSummary />

    <p>
      <Link
        href={ROUTES.TECHNICAL_SKILLS}
        className='link-white'
      >
        View all technical skills
      </Link>
    </p>
  </TextSection>
);

export default TechnicalSkills;
