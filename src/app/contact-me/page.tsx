import { MainContainer } from 'mellc-ui-kit';
import ContactSection from '@/components/contacts/ContactSection';
import ContactInforCard from '@/components/contacts/ContactInforCard';
import ContactFormCard from '@/components/contacts/ContactFormCard';

export default function ContactMe() {
  return (
    <MainContainer bg={'bgprimary'} padding={'xl'}>
      <ContactSection />
      <ContactInforCard />
      <ContactFormCard />
    </MainContainer>
  );
}
