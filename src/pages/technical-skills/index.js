import Head from '@/components/Head';
import { METADATA } from '@/content-strings';
import Sidebar from '@/components/Sidebar';
import TextSection from '@/components/TextSection';
import TechnicalList from '@/components/TechnicalList';

const TechnicalSkillsPage = () => (
  <>
    <Head
      pageTitle={METADATA.PAGE_TITLES.TECHNICAL_SKILLS}
    />

    <main className='main-container'>

      <TextSection largePadding>
        <h1>Tony{"'"}s technical skills</h1>
        <p className='heading-caption'>I use the right tools for the job.</p>
      </TextSection>

      <Sidebar />

      <div className='main-content'>
        <TechnicalList />
      </div>

    </main>
  </>
);

export default TechnicalSkillsPage;
