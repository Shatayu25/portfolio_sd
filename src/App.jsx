import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex min-h-screen flex-col font-dmserif text-zinc-300">
      <Header />

      <main className="flex-grow">
        <Content />
      </main>

      <Footer />
    </div>
  );
}

export default App;
