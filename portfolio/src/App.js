import './App.css';
import Homepage from './Components/Homepage';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>

    <Header></Header>
    <Routes>
    <Route path='/' element={<Homepage></Homepage>}/>
    <Route path='/portfolio' element={<Portfolio></Portfolio>}/>
    <Route path='/contact' element={<Contact></Contact>}/>
    <Route path='/resume' element={<Resume></Resume>}/>



    </Routes>

    <Footer></Footer>

    </BrowserRouter>
    </div>
  );
}

export default App;
