import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { blueGrey } from '@material-ui/core/colors'

const superagent = require('superagent')

const Weather = () => {
    
    const [temp, setTemp] = useState(0)
    const [humidity, setHumidity] = useState(0)


    const key =  '2833d0644c5376a1ab82adcf01ac0cb1'
    const city = 'london'
    const units = 'imperial'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`


        superagent 
        .get(url) 
        .end((err, res) => { 
        if (err) { 
          console.error(err); 
          return 
        } 
       
        const responseData = JSON.parse(res.text); 
        setTemp(responseData.main.temp)
        setHumidity(responseData.main.humidity)
    } ); 

    return (
        <>
        <div>
            The tempurature in {city} is {temp} F and the humidity is {humidity}%.
        </div>
        </>
    )
}

const WeatherPage = () => {
    return (
    <>
        <Paper style={{background:blueGrey[500]}}>
            <h3 className='App-header-words'>
                Weather
            </h3>
        </Paper>
        <Paper style={{background:blueGrey[800]}}>
            <div className='App-content-words'>
                <Weather/>
            </div>
            <div className='App-content-words'>
                <p>
                   That's the data from OpenWeather's api.        
                </p>
            </div>
        </Paper>
        
        
    </>
    )
}

export default WeatherPage