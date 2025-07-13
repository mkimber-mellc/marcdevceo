import { FlexContainer, Title, Subtitle, BodyText, Card } from '@/mellc-ui-kit';

export default function BioSection() {
  return (
    <FlexContainer flexDirection="col" alignItems="center" gap={4} py="xl" className={'md:px-12'}>
      <Card bg="bglight" padding="xl" shadowColor="shadow-warm">
        <FlexContainer flexDirection="col" gap={4}>
          <Title color="text-gray-500" align="center">
            Quick Snapshot
          </Title>
          <Subtitle color="textlight" align="center">
            Systems-thinker. Spiritual leader. Always learning.
          </Subtitle>
          <BodyText color="textlight" align="center">
            Based in North Carolina, I bring 20+ years of leadership experience from customer
            service to strategic product design. I&#39;m the founder of MELLC Labs, a company
            focused on building AI-powered systems that blend clarity, culture, and code. From
            design tokens to digital transformation, I work with purpose — and a quiet fire.
          </BodyText>
        </FlexContainer>
      </Card>
    </FlexContainer>
  );
}
