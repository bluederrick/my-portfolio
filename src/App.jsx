import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>

    </div>
  )
}

export default App
