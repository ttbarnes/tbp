import Image from 'next/image';
import TextSection from '@/components/TextSection';

const Intro = () => (
  <TextSection>
    <h1><span>Hello!</span> I{"'"}m Tony.</h1>
    <p style={{ fontSize: '1.5em' }}>I write code and music.</p>

    <Image
      src='/tony-barnes.jpg'
      width={250}
      height={250}
      alt='Headshot of Tony Barnes'
      style={{ objectFit: 'contain' }}
    />

  </TextSection>
);

export default Intro;
