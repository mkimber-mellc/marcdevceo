import { BlockContainer, MainContainer } from 'mellc-ui-kit';
import HeroSection from '@/components/HeroSection';
import ProjectsPreview from '@/components/ProjectsPreview';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <MainContainer bg={'bgprimary'} gap={5}>
      <BlockContainer py={'lg'} width={'full'} className={'px-5 sm:px-8 md:px-12 lg:px-16'}>
        <HeroSection />
      </BlockContainer>
      <ProjectsPreview />
      <CTASection />
    </MainContainer>
  );
}
