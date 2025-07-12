import { FlexContainer, MainContainer } from 'mellc-ui-kit';
import HeroSection from '@/components/home/HeroSection';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <MainContainer bg={'bgprimary'} gap={10} padding={'none'}>
      <FlexContainer
        flexDirection={'col'}
        py={'lg'}
        width={'full'}
        gap={10}
        className={'px-5 sm:px-8 md:px-12 lg:px-16'}
      >
        <HeroSection />
        <ProjectsPreview />
      </FlexContainer>
      <CTASection />
    </MainContainer>
  );
}
