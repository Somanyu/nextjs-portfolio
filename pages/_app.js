import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp
