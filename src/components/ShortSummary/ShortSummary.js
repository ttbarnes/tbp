import Link from 'next/link';
import TextSection from '@/components/TextSection';
import { BARNES_CODE } from '@/constants';

const ShortSummary = () => (
  <TextSection
    backgroundColor='grey'
    textColor='black'
  >
    <h2>A little about me</h2>

    <p>
      As a Lead Full Stack JavaScript Developer and director of{' '}
      <Link
        href={BARNES_CODE.HREF}
        rel='noopener noreferrer'
      >
        {BARNES_CODE.TEXT}
      </Link>
      , I specialise in bespoke web app development - particularly around
      re-platforming and digital transformation projects.
    </p>

    <p>
      I have architected, built and maintained a lot of APIs, UIs and databases
      for many different types of industries and products or services.
    </p>

    <p>
      When I{"'"}m not writing code, you{"'"}ll probably find me analysing
      something and figuring out how to tackle and transform opportunities into
      clean and scalable solutions.
    </p>
  </TextSection>
);

export default ShortSummary;
