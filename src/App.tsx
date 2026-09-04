import {
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
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
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
