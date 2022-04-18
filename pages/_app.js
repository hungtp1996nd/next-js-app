import '../styles/globals.css'
import '../styles/layout.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../styles/navbar.css'
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <SessionProvider session={session}>
        {/*<Header />*/}
        <Navbar />
        <Component {...pageProps} />
        {/*<Footer />*/}
      </SessionProvider>
    </>
  )
}

export default MyApp
