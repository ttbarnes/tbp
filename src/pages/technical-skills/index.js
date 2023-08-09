import Head from 'next/head';
import Sidebar from '@/components/Sidebar';
import TextSection from '@/components/TextSection';

import TechnicalList from '@/components/TechnicalList';

const TechnicalSkillsPage = () => (
  <>
    <Head>
      <title>Tony Barnes</title>
      <meta name="description" content="TODO" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main style={{ position: 'relative' }}>

      <TextSection largePadding>
        <h1>Tony{"'"}s technical skills</h1>
        <p style={{ fontSize: '1.5em' }}>Example intro.</p>
      </TextSection>

      <Sidebar />

      <TechnicalList />

    </main>
  </>
);

export default TechnicalSkillsPage;
