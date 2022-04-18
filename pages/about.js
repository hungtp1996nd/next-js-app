import Footer from "../components/Footer";

const About = () => {
  return <div className='content'>About page</div>
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
