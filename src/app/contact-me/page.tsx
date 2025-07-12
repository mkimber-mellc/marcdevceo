import { GridContainer, MainContainer } from 'mellc-ui-kit';
import ContactInfoCard from '@/components/contacts/ContactInfoCard';
import ContactFormCard from '@/components/contacts/ContactFormCard';

export default function ContactMe() {
  return (
    <MainContainer bg={'bgprimary'} padding={'xl'} className={'justify-center items-center'}>
      <GridContainer gridCols={1} className="md:grid-cols-2" gridGap={12}>
        {/* Left Side — Intro + Links */}
        <ContactInfoCard />
        {/* Right Side — Contact Form */}
        <ContactFormCard />
      </GridContainer>
    </MainContainer>
  );
}
