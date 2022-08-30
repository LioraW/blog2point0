import './App.css';
import DividingLine from './components/DividingLine'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './containers/Home';
import About from './containers/About'
import Other from './containers/Other'
import EditBlog from './containers/EditBlog';


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
            <Route element={<Other />} exact path='/other/*' />
            <Route element={<EditBlog />} exact path='/edit/*' />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;

