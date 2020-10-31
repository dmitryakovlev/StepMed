import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import About from "../components/About";
import Partners from "../components/Partners";
import Nav from "../components/Nav/index";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <>
      {/* <Nav /> */}
      <Header />
      <Dashboard />
      <About />
      <Partners />
      <Footer />
    </>
  );
}
