import Head from '@/components/Head';
import { METADATA } from '@/content-strings';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Main from '@/components/Main';
import PagesList from '@/components/Sidebar/PagesList';
import TechnicalCategoriesList from '@/components/Sidebar/TechnicalCategoriesList';
import TextSection from '@/components/TextSection';
import TechnicalList from '@/components/TechnicalList';
import GenericOutro from '@/components/GenericOutro';

const TechnicalSkillsPage = () => (
  <>
    <Head pageTitle={METADATA.PAGE_TITLES.TECHNICAL_SKILLS} />

    <Header />

    <Sidebar alwaysOpenOnDesktop>
      <>
        <PagesList />
        <TechnicalCategoriesList />
      </>
    </Sidebar>

    <Main pageHasSidebar>
      <TextSection largePadding>
        <h1>Tony{"'"}s technical skills</h1>
        <p className='heading-caption'>I use the right tools for the job.</p>
      </TextSection>

      <TechnicalList />

      <GenericOutro
        renderThoughtsLink
        renderClientsProjectsLink
        renderRecommendations
      />
    </Main>
  </>
);

export default TechnicalSkillsPage;
