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
    <>
    <Router>
      <Routes>
      <Header />
      <Hero />
      <About />
      <Interview />
      <Reviews />
      <Contact />
      <Form />
      <FormModal />
      <Footer />
      </Routes>
    </Router>
    </>
  );
}

export default App;
