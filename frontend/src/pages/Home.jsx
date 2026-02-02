import About from '../components/About';
import Connect from '../components/Connect';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Timeline />
            <Connect />
        </div>
    );
}

export default Home;

