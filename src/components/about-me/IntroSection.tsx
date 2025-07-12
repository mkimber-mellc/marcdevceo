import { FlexContainer, Title, Subtitle, BodyText } from 'mellc-ui-kit';

export default function IntroSection() {
  return (
    <FlexContainer flexDirection={'col'} py="xl" gap={4}>
      <Title color="textprimary" align="center">
        Meet Marcus Kimber
      </Title>

      <Subtitle color="textprimary" align="center">
        Developer. Strategist. Systems Thinker.
      </Subtitle>

      <BodyText color="textprimary" align="center" className="max-w-3xl mx-auto">
        With over 20 years in customer service and a decade in leadership, I build with empathy,
        precision, and vision. Now, I help teams and clients unlock clarity through strategy and
        AI-powered systems.
      </BodyText>
    </FlexContainer>
  );
}
