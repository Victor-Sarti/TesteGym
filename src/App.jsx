
import Class from "./components/ClassSection";
import ManSection from "./components/ManSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ProgamSection from "./components/progamSection";
import TrainerSection from "./components/TrainerSection";

const App = () => {
  return ( 
  <>
  <Navbar/>
  <ManSection/>
  <ProgamSection/>
  <Class/>
  <TrainerSection/>
  <Pricing/>
  </> 
  );
}
 

export default App;