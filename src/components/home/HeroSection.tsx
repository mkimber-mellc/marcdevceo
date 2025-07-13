import { BodyText, Button, Card, FlexContainer, Subtitle, Title, UILink } from '@/mellc-ui-kit';

export default function HeroSection() {
  return (
    <Card bg={'bgbrandmid'} px={'2xl'} py={'xl'}>
      <FlexContainer flexDirection={'col'} alignItems={'center'} gap={5}>
        <Title color={'textbrandmid'}>MarcDevCEO</Title>
        <Subtitle color={'textbrandmid'} align={'center'}>
          Full Stack Product Strategist
        </Subtitle>

        <BodyText color={'textbrandmid'} align={'center'}>
          🔬 Powered by MELLC Labs — where AI, clarity, and code come to play.
        </BodyText>

        <UILink href="/projects">
          <Button bg={'bgaccent'} padding={'md'} pill>
            View Projects
          </Button>
        </UILink>
      </FlexContainer>
    </Card>
  );
}
