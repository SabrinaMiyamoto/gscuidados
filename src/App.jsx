import { useTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./components/Hero";
import About from "./components/About";
import Interview from "./components/Interview";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import './App.css'
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Form from "./components/Form";
import FormModal from "./components/FormModal";

function App() {
  const theme = useTheme();

  return (
    <Router>
      <Header /> {/* O Header fica fora das rotas para aparecer em todas as páginas */}
      <Routes>
        {/* Rota principal */}
        <Route path="/cuidadores-de-idosos/*" element={
          <>
            <Hero />
            <About />
            <Interview />
            <Reviews />
            <Contact />
            <Form />
            <FormModal />
          </>
        } />
      </Routes>
      <Footer /> {/* O Footer fica fora das rotas para aparecer em todas as páginas */}
    </Router>
  );
}

export default App;