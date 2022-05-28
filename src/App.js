import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BeersList from './pages/BeersList';
import BeerDetail from './pages/BeerDetail';
import NewBeer from './pages/NewBeer';
import { Route, Routes } from 'react-router-dom';
import BeerRandom from './pages/BeerRandom';

function App() {
  return (
    <div className="App">


      <Navbar/>

      <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/beers" element={<BeersList/>} />
          <Route path="/beers/:beerId/details" element={<BeerDetail/>}/>
          <Route path="/beers/random" element={<BeerRandom/>}/>
          <Route path="/beers/create-beer" element={<NewBeer/>}/>

      </Routes>
    
    </div>
  );
}

export default App;
