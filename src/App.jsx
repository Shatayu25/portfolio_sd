import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="font-dmserif flex min-h-screen flex-col text-zinc-300">
      <Header />

      <main className="flex-grow">
        <Content />
      </main>

      <Footer />

      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "font-cascadia",
          style: {
            background: "#18181b",
            color: "#d4d4d8",
            border: "0.5px solid #065f46",
          },
        }}
      />
    </div>
  );
}

export default App;
