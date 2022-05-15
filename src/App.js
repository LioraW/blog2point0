import './App.css';
import Button from '@mui/material/Button';
import Create from './components/create'
import updatePost from './components/update'
import createPost from './components/createPost';

const buttonStyle = {
  marginRight: '10px',
  textDecoration: 'none',
  margiLeft: 'auto'
 }

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
        <Button style={buttonStyle} variant='contained' color='secondary'
            onClick={ async () => { await createPost({title:"cheeken", text: "rox"})} }>
            New Post
        </Button>
      </div>
     
    </div>
  );
}

export default App;
