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
    <main className='main-container'>

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
