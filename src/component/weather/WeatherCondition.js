import React, { Component } from 'react'

class WeatherCondition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temps: []
        }
    }
    
    componentWillUnmount(){
        const apiKey = '18d326ef6a9a24c5a258ba26a10eea25';
        const city = "London, UK";
        fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
        .then(response => response.json())
        .then(data=>{
            console.log('weather')
            console.log(data)
            this.setState({temps:data})});
    }
    render() {
        return (
            <div>
            {(typeof this.state.temps.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{this.state.temps.name}, {this.state.temps.sys.country}</div>
            
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(this.state.temps.main.temp)}°c
            </div>
            <div className="weather">{this.state.temps.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
            </div>
        )
    }
}


export default  WeatherCondition;