import { motion } from 'framer-motion';
import Image from 'next/image';
import TextSection from '@/components/TextSection';
import styles from './Intro.module.scss';

const Intro = () => (
  <TextSection largePadding>
    <h1><span>Hello!</span> I{"'"}m Tony.</h1>
    <p className='heading-caption'>I write code and music.</p>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: .5 } }}
      viewport={{ once: true }}
    >
      <Image
        src='/tony-barnes.jpg'
        width={250}
        height={250}
        alt='Headshot of Tony Barnes'
        className={styles.image}
      />
    </motion.div>

  </TextSection>
);

export default Intro;
