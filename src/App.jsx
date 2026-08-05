import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen text-zinc-300 flex flex-col'>
      <Header />

      <main className='flex-grow'>
        <Content />
      </main>

      <Footer />
    </div>
  );
}

export default App;
