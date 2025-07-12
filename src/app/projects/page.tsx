import { MainContainer } from 'mellc-ui-kit';
import ProjectsIntroSection from '@/components/projects/ProjectsIntroSection';
import ProjectsGrid from '@/components/projects/ProjectsGrid';

export default function ProjectsPage() {
  return (
    <MainContainer bg={'bgprimary'} padding={'none'} gap={12}>
      {/* Top Intro Section with title and emotional context */}
      <ProjectsIntroSection />

      {/* Grid layout for displaying project cards */}
      <ProjectsGrid />
    </MainContainer>
  );
}
