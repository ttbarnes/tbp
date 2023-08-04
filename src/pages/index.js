import Head from 'next/head';
import Intro from '@/components/Intro';
import ShortSummary from '@/components/ShortSummary';
import Experience from '@/components/Experience';
import TechnicalSkills from '@/components/TechnicalSkills';
import SoftSkills from '@/components/SoftSkills';
import TonyThoughts from '@/components/TonyThoughts';
import WorkTogether from '@/components/WorkTogether';
import FindMeOn from '@/components/FindMeOn';

const HomePage = () => (
  <>
    <Head>
      <title>Tony Barnes</title>
      <meta name='description' content='TODO' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>

      <Intro />

      <ShortSummary />

      <Experience />

      <TechnicalSkills />

      <SoftSkills />

      <TonyThoughts />

      <WorkTogether />

      <FindMeOn />
        
    </main>
  </>
);

export default HomePage;
