import Head from 'next/head';
import { METADATA } from '@/content-strings';

export default function Home() {
  return (
    <>
      <Head pageTitle={METADATA.PAGE_TITLES.QUICK_THOUGHTS} />

      <main className='main-container'>
        <div className='container'>
          <h1>Tony{"'"}s quick thoughts</h1>
          <p className='heading-caption'>Some intro here.</p>
        </div>
      </main>
    </>
  );
}
