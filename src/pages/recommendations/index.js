import { METADATA, RECOMMENDATIONS } from '@/content-strings';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PagesList from '@/components/Sidebar/PagesList';
import Main from '@/components/Main';
import TextSection from '@/components/TextSection';
import RecommendationsList from '@/components/RecommendationsList';
import GenericOutro from '@/components/GenericOutro';

const RecommendationsPgae = () => {
  return (
    <>
      <Head pageTitle={METADATA.PAGE_TITLES.RECOMMENDATIONS} />

      <Header />

      <Sidebar alwaysOpenOnDesktop>
        <PagesList />
      </Sidebar>

      <Main
        pageHasSidebar
        extraTopPadding
      >
        <TextSection largePadding>
          <h1>Recommendations</h1>
        </TextSection>

        <RecommendationsList recommendations={RECOMMENDATIONS} />

        <GenericOutro
          renderTechSkillsLink
          renderThoughtsLink
          renderClientsProjectsLink
        />
      </Main>
    </>
  );
};

export default RecommendationsPgae;
