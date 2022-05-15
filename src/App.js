import './App.css';
import Button from '@mui/material/Button';
import Create from './components/create'
import updatePost from './components/update'

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
          Here's a Blog 2
        </p>
        <p> more stuff</p>
        <Create/>
      </header>
       <div className='button'>
         <Button style={buttonStyle} variant='contained' color='secondary'
            >
            New Post
        </Button>
        <Button style={buttonStyle} variant='contained' color='secondary'
            onClick={updatePost(2, {title:"chani", text: "rox"})}>
            Update Post
        </Button>
      </div>
     
    </div>
  );
}

export default App;
