import './App.css';
import Posts from './components/Posts'
import NewPost from './components/newPost';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Here's a 2nd Blog
        </p>
        <Posts/>
      </header>
       <div className='button'>
        <NewPost />
      </div>
     
    </div>
  );
}

export default App;

