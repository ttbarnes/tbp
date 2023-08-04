import Link from 'next/link';
import TextSection from '@/components/TextSection';
import { EMAIL } from '@/constants';

const WorkTogether = () => (
  <TextSection
    backgroundColor='blue'
    textColor='white'
  >
    <h2>Maybe we could work together?</h2>

    <p>I{"'"}m very friendly and love to collaborate - let{"'"}s arrange a coffee/call.</p>

    <p>My email is{' '}
      <Link
        href={`mailto:${EMAIL}`}
        className='white-text'
      >
        tony@tonybarnes.me
      </Link>
    </p>
  </TextSection>
);

export default WorkTogether;
