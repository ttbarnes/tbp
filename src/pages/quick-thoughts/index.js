import { METADATA, QUICK_THOUGHTS } from '@/content-strings';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PagesList from '@/components/Sidebar/PagesList';
import Main from '@/components/Main';
import TextSection from '@/components/TextSection';
import QuickThought from '@/components/QuickThought';

const {
  SOFTWARE_NOT_JUST_WRITING_CODE,
  BE_QUICK_DONT_RUSH,
  ACCESSIBLE_FROM_THE_START
} = QUICK_THOUGHTS;

const QuickThoughtsPage = () => (
  <>
    <Head pageTitle={METADATA.PAGE_TITLES.QUICK_THOUGHTS} />

    <Header />

    <Sidebar showCloseOnDesktop>
      <PagesList />
    </Sidebar>

    <Main
      extraTopPadding
    >
      <TextSection largePadding>
        <h1>Tony{"'"}s quick thoughts</h1>
        <p className='heading-caption'>Knowledge sharing is invaluable.</p>
      </TextSection>

      <QuickThought
        content={SOFTWARE_NOT_JUST_WRITING_CODE}
        backgroundColor='grey'
        textColor='black'
      />

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
    </Main>
  </>
);

export default QuickThoughtsPage;
