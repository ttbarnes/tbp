import TextSection from '@/components/TextSection';
import EmailAddress from '@/components/EmailAddress';

const WorkTogether = () => (
  <TextSection
    backgroundColor='blue'
    textColor='white'
  >
    <h2>Maybe we could work together?</h2>

    <p>
      I{"'"}m very friendly and love to collaborate - let{"'"}s arrange a
      coffee/call.
    </p>

    <p>
      <EmailAddress linkColorWhite />
    </p>
  </TextSection>
);

export default WorkTogether;
