import './App.css'
import { Footer } from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import { Home } from './components/Home/Home'
import { Institutional } from './components/Institutional/Institutional'
import { Offer } from './components/Offer/Offer'
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/" element={<Home />} />
          <Route path="/institucional" element={<Institutional />} />
          <Route path="/oferta" element={<Offer/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App
