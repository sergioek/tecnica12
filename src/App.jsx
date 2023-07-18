import './App.css';
import { Footer } from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { Institutional } from './components/Institutional/Institutional';
import { Offer } from './components/Offer/Offer';
import { Faq } from './components/Faq/Faq';
import { Contact } from "./components/Contact/Contact";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Forms } from './components/Forms/Forms';
import { News } from './components/News/News';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/" element={<Home />} />
          <Route path="/institucional" element={<Institutional />} />
          <Route path="/oferta" element={<Offer />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/noticias" element={<News/>} />
          <Route path="/formularios" element={<Forms/>} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App
