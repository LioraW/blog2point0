import React from 'react'
import { Link } from 'react-router-dom'
import { grey } from '@mui/material/colors'
import Button from '@mui/material/Button'
import '../App.css'

const buttonStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    fontFamily: 'Arvo'
   }
   
class NavBar extends React.Component {
    render () {
        return (
            <>
                <nav className='nav-bar'>
                    <Link to='/'>
                        <Button style={buttonStyle} >
                            Home
                        </Button>
                    </Link>

                    <Link to='/about'>
                        <Button style={buttonStyle} >
                            About
                        </Button>
                    </Link>

                    <Link to='/recipies'>
                        <Button style={buttonStyle} >
                            Recipes
                        </Button>
                    </Link>

                </nav>
                
            </>
        )
    }
}

export default NavBar