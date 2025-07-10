import { Button, Card, FlexContainer, Form, Input, TextAreaInput } from 'mellc-ui-kit';

export default function ContactFormCard() {
  return (
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

        <Button type={'submit'} bg="bg-blue-500" color="textaccent" padding="sm" pill hover="bold">
          Send Message
        </Button>
      </Form>
    </Card>
  );
}
