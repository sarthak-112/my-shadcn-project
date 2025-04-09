import Navbar from "./navbar";
import Hero from "./hero";
import Trusted from "./trusted";
import Projects from "./projects";
import Founders from "./founders";
import Statistics from "./stats";
import FAQ from "./faq";
import Footer from "./footer";
const Home = () => {
  return ( <div className="min-h-screen bg-[#ffffff]">    
    <Navbar/>
    <Hero/>
    <Founders/>
    <Trusted/>
    <Projects/>
    <Statistics/>
    <FAQ/>
    <Footer/>
  </div> );
}
 
export default Home;