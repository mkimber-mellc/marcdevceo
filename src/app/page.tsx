import { MainContainer } from 'mellc-ui-kit';
import HeroSection from '@/components/HeroSection';
import ProjectsPreview from '@/components/ProjectsPreview';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <MainContainer bg={'bgprimary'}>
      <HeroSection />
      <ProjectsPreview />
      <CTASection />
    </MainContainer>
  );
}
