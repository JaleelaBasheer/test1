import { Route, Routes } from 'react-router-dom';
import './App.css';
import Material from './components/Material'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
      <Footer></Footer>
     
    </>
  );
}

export default App;
