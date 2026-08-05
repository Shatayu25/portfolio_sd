import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-zinc-300">
      <Header />

      <main className="flex-grow">
        <Content />
      </main>

      <Footer />
    </div>
  );
}

export default App;
