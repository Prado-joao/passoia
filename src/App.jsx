import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CorProvider } from "./context/CorContext";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <CorProvider>
        <Header />
        <Index />
        <Footer />
      </CorProvider>
    </>
  );
}

export default App;
