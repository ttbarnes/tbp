import EmailAddress from '@/components/EmailAddress';
import styles from './BuildTogether.module.scss';

const BuildTogether = () => (
  <div className={styles.container}>
    <h3>Maybe we could build something together?</h3>

    <p>I{"'"}m very friendly and love to collaborate. <EmailAddress /></p>
  </div>
);

export default BuildTogether;
