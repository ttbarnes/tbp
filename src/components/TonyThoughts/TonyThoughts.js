import Link from 'next/link';
import TextSection from '@/components/TextSection';
import { ROUTES } from '@/constants';

const TonyThoughts = () => (
  <TextSection
    backgroundColor='grey'
    textColor='black'
  >
    <h2>Tony thoughts</h2>

    <p>I love to share knowledge, experiences, teach and mentor - It is invaluable and helps everyone.</p>
    <p>I will be publishing a blog soon - In the meantime, here are some <Link href={ROUTES.QUICK_THOUGHTS}>quick thoughts</Link>.</p>
  </TextSection>
);

export default TonyThoughts;
