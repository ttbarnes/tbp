import Head from '@/components/Head';
import { METADATA } from '@/content-strings';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Main from '@/components/Main';
import TechnicalCategoriesList from '@/components/Sidebar/TechnicalCategoriesList';
import TextSection from '@/components/TextSection';
import TechnicalList from '@/components/TechnicalList';
import BuildTogether from '@/components/BuildTogether';
import FindOutMore from '@/components/FindOutMore';

const TechnicalSkillsPage = () => (
  <>
    <Head
      pageTitle={METADATA.PAGE_TITLES.TECHNICAL_SKILLS}
    />

    <Header />
    
    <Sidebar alwaysOpenOnDesktop>
      <TechnicalCategoriesList />
    </Sidebar>

    <Main pageHasSidebar>

      <TextSection largePadding>
        <h1>Tony{"'"}s technical skills</h1>
        <p className='heading-caption'>I use the right tools for the job.</p>
      </TextSection>

      <TechnicalList />

      <TextSection
        largePadding={false}
        backgroundColor='lightGrey'
        textColor='black'
      >
        <BuildTogether />

        <FindOutMore />

      </TextSection>

    </Main>
  </>
);

export default TechnicalSkillsPage;

