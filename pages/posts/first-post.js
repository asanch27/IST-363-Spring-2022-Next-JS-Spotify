import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title> Blog post | Andrea Sanchez</title>
        <meta name="description" content="This is a summary of the blog post."/>
      </Head> 
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
  