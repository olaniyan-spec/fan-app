import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='' element></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
