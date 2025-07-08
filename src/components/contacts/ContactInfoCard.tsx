import { BodyText, CaptionText, FlexContainer, Title, UILink } from 'mellc-ui-kit';

export default function ContactInfoCard() {
  return (
    <FlexContainer
      flexDirection="col"
      justify={'center'}
      gap={6}
      className="px-5 sm:px-8 md:px-12 lg:px-16"
    >
      <Title color="text-blue-300">Let’s Connect</Title>

      <BodyText color="text-gray-300">
        I read every message personally. Whether you want to collaborate, ask a question, or explore
        a custom system, I’m here to help you bring clarity to the chaos.
      </BodyText>

      <CaptionText color="text-gray-300" italic>
        ✨ Typically replies within 48 hours. Let’s build something meaningful together.
      </CaptionText>

      <FlexContainer flexDirection="col" gap={2}>
        <UILink
          href="https://linkedin.com/in/marcus-k-a6800995/"
          target="_blank"
          className={'text-blue-300'}
        >
          LinkedIn ↗
        </UILink>
        <UILink href="https://github.com/mkimber-mellc" target="_blank" className={'text-blue-300'}>
          GitHub ↗
        </UILink>
      </FlexContainer>
    </FlexContainer>
  );
}
