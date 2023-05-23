import './App.css'
import { Footer } from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import { Home } from './components/Home/Home'
import { Project } from './components/Project/Project'

function App() {


  return (
    <div className="App">
     
      <NavBar/>
      

      <main>
        <Home/>
        <Project/>
      </main>
       
      <Footer />
      
    </div>
  )
}

export default App
