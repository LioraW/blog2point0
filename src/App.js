import './App.css';
import DividingLine from './components/DividingLine'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './containers/Home';
import About from './containers/About'
import Recipes from './containers/Recipes'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <div className='App-title'>
            Coding Between Carpools
            <NavBar />
          </div>
        </header>
        <div className='App-body'>
          <DividingLine color="black" />
          <Routes>
            <Route element={<Home />} exact path='/' />
            <Route element={<About />} exact path='/about/*' />
            <Route element={<Recipes />} exact path='/recipes/*' />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;

