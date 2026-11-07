import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Connect from "./components/Connect";
import Support from "./components/Support";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Connect />
        <Support />
      </main>
      <Footer />
    </div>
  );
}

export default App;
