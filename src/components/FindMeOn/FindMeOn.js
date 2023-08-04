import Link from 'next/link';
import TextSection from '@/components/TextSection';
import { SOCIAL_MEDIA } from '@/constants';

const { GITHUB, LINKEDIN, TWITTER, INSTAGRAM } = SOCIAL_MEDIA;

const FindMeOn = () => (
  <TextSection
    backgroundColor='black'
    textColor='white'
  >
    <h2>You can also find me on</h2>

    <ul className='list-style-bullet'>
      <li>
        <Link
          href={GITHUB}
          rel='noopener noreferrer'
          className='white-text'
        >
          {GITHUB}
        </Link>
      </li>

      <li>
        <Link
          href={LINKEDIN}
          rel='noopener noreferrer'
          className='white-text'
        >
          {LINKEDIN}
        </Link>
      </li>

      <li>
        <Link
          href={TWITTER}
          rel='noopener noreferrer'
          className='white-text'
        >
          {TWITTER}
        </Link>
      </li>

      <li>
        <Link
          href={INSTAGRAM}
          rel='noopener noreferrer'
          className='white-text'
        >
          {INSTAGRAM}
        </Link>    
      </li>
    </ul>
  </TextSection>  
);

export default FindMeOn;
