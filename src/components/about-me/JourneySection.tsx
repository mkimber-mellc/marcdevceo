import { Title, Subtitle, BodyText, Card, GridContainer, FlexContainer } from '@/mellc-ui-kit';

import { journey } from '@/data/journey';

export default function JourneySection() {
  return (
    <FlexContainer flexDirection="col" py="2xl" gap={10}>
      <Title color="text-gray-500">My Journey</Title>

      <GridContainer gridCols={1} className="md:grid-cols-2" gridGap={10}>
        {journey.map((item) => (
          <Card key={item.title} bg="bglight" padding="lg" shadowColor="shadow-white">
            <FlexContainer flexDirection="col" gap={3}>
              <Subtitle color="text-gray-500">{item.title}</Subtitle>
              <BodyText color="textlight">{item.description}</BodyText>
            </FlexContainer>
          </Card>
        ))}
      </GridContainer>
    </FlexContainer>
  );
}
