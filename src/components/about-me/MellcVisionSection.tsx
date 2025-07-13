import { Title, BodyText, FlexContainer, Card } from '@/mellc-ui-kit';

export default function MellcVisionSection() {
  return (
    <FlexContainer flexDirection="col" alignItems="center" py="2xl" width="full">
      <Card bg="bgaccent" padding="xl" shadowColor="shadow-accent">
        <FlexContainer flexDirection="col" gap={5}>
          <Title color="textaccent" align="center">
            Why I Built MELLC Labs
          </Title>

          <BodyText color="textaccent" align="center">
            I created MELLC Labs to help founders and teams operate with clarity. This isn’t just a
            dev shop — it’s a systems lab. We don’t just code; we architect operations, embed AI,
            and deliver with soul. Whether you’re scaling a startup or organizing your brand, MELLC
            exists to bring the structure, story, and strategy your work deserves.
          </BodyText>
        </FlexContainer>
      </Card>
    </FlexContainer>
  );
}
