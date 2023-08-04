import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tony Barnes</title>
        <meta name="description" content="TODO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className='container'>
          <h1>Tony{"'"}s quick thoughts</h1>
          <p style={{ fontSize: '1.5em' }}>Some intro here.</p>
        </div>

      </main>
    </>
  )
}
