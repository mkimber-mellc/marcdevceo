import IntroSection from '@/components/about-me/IntroSection';
import BioSection from '@/components/about-me/BioSection';
import BeliefsSection from '@/components/about-me/BeliefsSection';
import { MainContainer } from 'mellc-ui-kit';
import JourneySection from '@/components/about-me/JourneySection';
import MellcVisionSection from '@/components/about-me/MellcVisionSection';
import SpirtiualSection from '@/components/about-me/SpirtiualSection';
import CTASection from '@/components/home/CTASection';

export default function AboutMe() {
  return (
    <MainContainer>
      <IntroSection />
      <BioSection />
      <BeliefsSection />
      <JourneySection />
      <MellcVisionSection />
      <SpirtiualSection />
      <CTASection />
    </MainContainer>
  );
}
