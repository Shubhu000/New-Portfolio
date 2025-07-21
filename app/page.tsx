import Footer from '../components/Footer';
import SectionExperience from './ExperienceSection';
import SectionHero from './SectionHero';
import SectionLetsConnect from './SectionLetsConnect';
import SectionMyLatestProject from './SectionMyLatestProject';
import SectionQuote from './SectionQuote';
import SectionTechnologyStack from './SectionTechnologyStack';

export default function Home() {
  return (
    <div className="safe-layout">
      <SectionHero />
      <SectionTechnologyStack />
      <SectionExperience />
      <SectionLetsConnect />
      <SectionQuote />
      {/* <Footer /> */}
    </div>
  );
}
