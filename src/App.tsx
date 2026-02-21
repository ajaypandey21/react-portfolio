import {
  Navbar,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  DevOps,
  Resume,
  Contact,
  Footer,
} from "./sections";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <DevOps />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
