import Head from '@/components/Head';
import { METADATA } from '@/content-strings';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PagesList from '@/components/Sidebar/PagesList';
import Main from '@/components/Main';
import TextSection from '@/components/TextSection';
import GenericOutro from '@/components/GenericOutro';
import IndustrySectorGroups from '@/components/IndustrySectorGroups';

const ClientsProjectsPage = () => {
  return (
    <>
      <Head pageTitle={METADATA.PAGE_TITLES.CLIENTS_PROJECTS} />

      <Header />

      <Sidebar alwaysOpenOnDesktop>
        <PagesList />
      </Sidebar>

      <Main
        pageHasSidebar
        extraTopPadding
      >
        <TextSection largePadding>
          <h1>Clients, projects</h1>
          <p className='heading-caption'>A small preview.</p>
        </TextSection>

        <IndustrySectorGroups />

        <GenericOutro
          renderTechSkillsLink
          renderThoughtsLink
          renderRecommendations
        />
      </Main>
    </>
  );
};

export default ClientsProjectsPage;
