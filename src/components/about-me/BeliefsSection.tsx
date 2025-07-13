import { Title, BodyText, Card, GridContainer, Subtitle, FlexContainer } from '@/mellc-ui-kit';
import { beliefs } from '@/data/beliefs';

export default function BeliefsSection() {
  return (
    <FlexContainer flexDirection={'col'} py="2xl" gap={10}>
      <Title color={'text-gray-500'}>What I Believe</Title>

      <GridContainer gridCols={1} className="md:grid-cols-2" gridGap={12}>
        {beliefs.map((item) => (
          <Card key={item.title} bg="bglight" padding="lg" shadowColor="shadow-white">
            <FlexContainer flexDirection={'col'} gap={5}>
              <Subtitle color="text-gray-500">{item.title}</Subtitle>
              <BodyText color="textlight">{item.description}</BodyText>
            </FlexContainer>
          </Card>
        ))}
      </GridContainer>
    </FlexContainer>
  );
}
