import './App.css';
import Education from './components/Education';
import Biovideo from './components/Biovideo';
import Head from './components/Head';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Photos from './components/Photos';
import Family from './components/Family';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Head />
    <Biovideo />
    <Service />
    <Education />
    <Photos />
    <Family />
    <Contact />
    <Location />
    <Footer />
    </>
  );
}

export default App;
