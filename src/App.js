
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetail';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
        <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path ="/" element = { <Home search={search}/>} />
        <Route  path ="/movie/:imdbID" element = { <MovieDetail />} />
        <Route  component = { PageNotFound} />
        

      </Routes>
        <Footer />
     
    </div>
  );
}

export default App;
