import {
  FlexContainer,
  GridContainer,
  Title,
  BodyText,
  Card,
  Form,
  Input,
  Button,
  UILink,
  TextAreaInput,
  CaptionText,
} from 'mellc-ui-kit';

export default function ContactSection() {
  return (
    <GridContainer gridCols={1} className="md:grid-cols-2" gridGap={12}>
      {/* Left Side — Intro + Links */}
      <FlexContainer
        flexDirection="col"
        justify={'center'}
        gap={6}
        className="px-5 sm:px-8 md:px-12 lg:px-16"
      >
        <Title color="text-blue-300">Let’s Connect</Title>

        <BodyText color="text-gray-300">
          I read every message personally. Whether you want to collaborate, ask a question, or
          explore a custom system, I’m here to help you bring clarity to the chaos.
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
          <UILink
            href="https://github.com/mkimber-mellc"
            target="_blank"
            className={'text-blue-300'}
          >
            GitHub ↗
          </UILink>
        </FlexContainer>
      </FlexContainer>

      {/* Right Side — Contact Form */}
      <Card bg="bglight" padding="xl" shadowColor="shadow-accent" className="w-full">
        <Form
          action="mailto:mkimber@managedenterprises.net?subject=Contact%20from%20Portfolio"
          method="POST"
          encType={'text/plain'}
          className={'h-full'}
        >
          <FlexContainer flexDirection={'col'} justify={'between'} gap={8} mb={'lg'}>
            <Input
              name="name"
              placeholder="Your Name"
              required
              className={'border-b-base border-black text-black p-2 w-full'}
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className={'border-b-base border-black text-black p-2 w-full'}
            />
            <TextAreaInput
              name="message"
              placeholder="Your Message"
              rows={8}
              required
              className={'border-b-base border-black text-black p-2 w-full'}
            />
          </FlexContainer>

          <Button bg="bg-blue-500" color="textaccent" padding="sm" pill hover="bold">
            Send Message
          </Button>
        </Form>
      </Card>
    </GridContainer>
  );
}
