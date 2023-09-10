import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PagesList from '@/components/Sidebar/PagesList';
import Main from '@/components/Main';
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
    <Header />

    <Sidebar showCloseOnDesktop>
      <PagesList />
    </Sidebar>

    <Main>
      <Intro />

      <ShortSummary />

      <Experience />

      <TechnicalSkills />

      <SoftSkills />

      <TonyThoughts />

      <WorkTogether />

      <FindMeOn />
    </Main>
  </>
);

export default HomePage;
