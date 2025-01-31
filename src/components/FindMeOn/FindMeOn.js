import Link from 'next/link';
import Image from 'next/image';
import TextSection from '@/components/TextSection';
import { SOCIAL_MEDIA } from '@/constants';
import styles from './FindMeOn.module.scss';

const { GITHUB, LINKEDIN } = SOCIAL_MEDIA;

const FindMeOn = () => (
  <TextSection
    backgroundColor='black'
    textColor='white'
  >
    <h2>You can also find me on</h2>

    <ul>
      <li className={styles.listItem}>
        <Link
          href={GITHUB}
          rel='noopener noreferrer'
          target='_blank'
          className={`white-text ${styles.link}`}
        >
          <Image
            src='/social/gh.svg'
            alt='GitHub icon'
            width={40}
            height={40}
            className={styles.image}
          />
          {GITHUB}
        </Link>
      </li>

      <li className={styles.listItem}>
        <Link
          href={LINKEDIN}
          rel='noopener noreferrer'
          target='_blank'
          className={`white-text ${styles.link}`}
        >
          <Image
            src='/social/in.svg'
            alt='LinkedIn icon'
            width={40}
            height={40}
            className={styles.image}
          />
          {LINKEDIN}
        </Link>
      </li>
    </ul>
  </TextSection>
);

export default FindMeOn;
