import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Somanyu Samal</title>
        <meta name="description" content="My portfolio built with Next.js, Bootstrap and Vercel 💡" />
        <link rel="icon" href="/favicon.ico" />
        <meta name='keywords' content='nextjs, porfolio, somanyu, somanyu samal, website portfolio' />
        <meta name='author' content='Somanyu Samal' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <ThemeProvider enableSystem={false} defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
