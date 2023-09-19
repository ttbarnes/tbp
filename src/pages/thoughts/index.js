import { METADATA, TONYS_THOUGHTS } from '@/content-strings';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PagesList from '@/components/Sidebar/PagesList';
import Main from '@/components/Main';
import TextSection from '@/components/TextSection';
import QuickThought from '@/components/QuickThought';
import GenericOutro from '@/components/GenericOutro';

const { BE_QUICK_DONT_RUSH, ACCESSIBLE_FROM_THE_START } = TONYS_THOUGHTS;

const TonysThoughtsPage = () => (
  <>
    <Head pageTitle={METADATA.PAGE_TITLES.TONYS_THOUGHTS} />

    <Header />

    <Sidebar showCloseOnDesktop>
      <PagesList />
    </Sidebar>

    <Main extraTopPadding>
      <TextSection largePadding>
        <h1>Tony{"'"}s thoughts</h1>
        <p className='heading-caption'>Knowledge sharing is invaluable.</p>
      </TextSection>

      <QuickThought
        content={BE_QUICK_DONT_RUSH}
        backgroundColor='blue'
        textColor='white'
      />

      <QuickThought
        content={ACCESSIBLE_FROM_THE_START}
        backgroundColor='black'
        textColor='white'
      />

      <GenericOutro
        renderTechSkillsLink
        renderClientsProjectsLink
        renderRecommendations
      />
    </Main>
  </>
);

export default TonysThoughtsPage;
