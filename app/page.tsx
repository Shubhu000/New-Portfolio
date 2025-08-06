import Footer from '../components/Footer';
import SectionExperience from './ExperienceSection';
import SectionHero from './SectionHero';
import SectionLetsConnect from './SectionLetsConnect';
import SectionMyLatestProject from './SectionMyLatestProject';
import SectionProjects from './SectionProjects';
import SectionQuote from './SectionQuote';
import SectionTechnologyStack from './SectionTechnologyStack';

export default function Home() {
  return (
    <div className="safe-layout">
      <SectionHero />
      <SectionTechnologyStack />
      <SectionExperience />
      <SectionProjects />
      <SectionLetsConnect />
      <SectionQuote />
      {/* <Footer /> */}
    </div>
  );
}
