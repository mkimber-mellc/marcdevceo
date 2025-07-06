import { FlexContainer, Title, BodyText } from 'mellc-ui-kit';

export default function SpiritualSection() {
  return (
    <FlexContainer
      bg="bg-purple-300"
      flexDirection="col"
      alignItems="center"
      justify="center"
      padding="2xl"
      gap={4}
      width="full"
      className="text-center"
    >
      <Title color="text-purple-900">Rooted in Faith</Title>

      <BodyText color="text-purple-700">
        My faith isn’t separate from my work — it fuels it. I believe spiritual clarity leads to
        product clarity. That’s why I build with intention, trust, and heart.
      </BodyText>

      <BodyText color="text-purple-700" className="italic font-semibold">
        “Unless the Lord builds the house, the builders labor in vain.” — Psalm 127:1
      </BodyText>
    </FlexContainer>
  );
}
