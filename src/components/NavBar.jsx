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
                <div className='nav-bar'>
                    {/* <Link to='/'> */}
                        <Button style={buttonStyle} >
                            Home
                        </Button>
                    {/* </Link> */}

                    {/* <Link to='/WeatherPage'> */}
                        <Button style={buttonStyle} >
                            Weather
                        </Button>
                    {/* </Link> */}

                    {/* <Link to='/aboutmeira'> */}
                        <Button style={buttonStyle} >
                            About Meira
                        </Button>
                    {/* </Link> */}

                </div>
                
            </>
        )
    }
}

export default NavBar