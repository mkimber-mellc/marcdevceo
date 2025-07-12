import { FlexContainer, Title, BodyText, Button, UILink } from 'mellc-ui-kit';

export default function CTASection() {
  return (
    <FlexContainer
      bg={'bg-rose-700'}
      py={'4xl'}
      flexDirection="col"
      alignItems="center"
      gap={4}
      width={'full'}
    >
      <Title color="textcta" align="center">
        Let’s Build Something Bold
      </Title>
      <BodyText color="textcta" align="center">
        Whether you’re a founder, a team, or just dreaming —{' '}
        <span className={'italic font-bold'}>MELLC Labs </span>
        can bring it to life.
      </BodyText>
      <UILink href="/contact-me">
        <Button bg="bgaccent" padding="md" pill hover={'bold'} className={'hover:bgwarm'}>
          Let&#39;s Connect
        </Button>
      </UILink>
    </FlexContainer>
  );
}
