import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>BM Frame</title>
        <meta property="og:title" content="BM Frame" />
        <meta property="og:image" content=https://imgur.com/y5zxreY />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content=https://imgur.com/y5zxreY />
        <meta property="fc:frame:button:1" content="BM" />
        <meta property="fc:frame:post_url" content="https://bmframe.vercel.app/api/frame" />
      </Head>
      <main>
        <h1>BM Frame</h1>
      </main>
    </>
  )
}
