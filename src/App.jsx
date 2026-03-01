import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Pricing />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
