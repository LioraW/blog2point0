import './App.css';
import Posts from './components/Posts'
import NewPost from './components/newPost';
import DividingLine from './components/DividingLine'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-title'>
           Here's a 2nd Blog 
        </div>
     
        <NavBar />
      </header>
      <body>
        <DividingLine color="black" />
        <div className ='App-body'>
          <NewPost />
          <Posts/>
        </div>
      </body>
     
    </div>
  );
}

export default App;

