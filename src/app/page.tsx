import { BlockContainer, MainContainer } from 'mellc-ui-kit';
import HeroSection from '@/components/home/HeroSection';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <MainContainer bg={'bgprimary'} gap={5} className={'px-5 sm:px-8 md:px-12 lg:px-16'}>
      <BlockContainer py={'lg'} width={'full'}>
        <HeroSection />
      </BlockContainer>
      <ProjectsPreview />
      <CTASection />
    </MainContainer>
  );
}
