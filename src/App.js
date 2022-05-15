import './App.css';
import Create from './components/create'
import NewPost from './components/newPost';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Here's a 2nd Blog
        </p>
        <Create/>
      </header>
       <div className='button'>
        <NewPost />
      </div>
     
    </div>
  );
}

export default App;

