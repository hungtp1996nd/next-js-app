import Footer from "../components/Footer";
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>About page testing with Head component</title>
        <meta name='description' content='make clear to the page' />
      </Head>
      <h1 className='content'>About page</h1>
    </>
  )
}

export default About

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}
