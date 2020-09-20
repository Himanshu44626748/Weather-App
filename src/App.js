import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './component/weather';
import 'weather-icons/css/weather-icons.css';
import Forms from './component/form';

const Api_key = "9af02ed858cf50a1ee88c9246e37b078";
//api call = api.openweathermap.org/data/2.5/weather?q=allahabad,india

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      temp: undefined,
      max_temp: undefined,
      min_temp: undefined,
      icon: undefined,
      description: undefined,
      error: true
    };
    
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };

  }

  get_weatherIcons(rangeId){

    if(rangeId >= 200 && rangeId <= 232)
    {
      this.setState({icon: this.weatherIcon.Thunderstorm});
    }
    else if(rangeId >= 300 && rangeId <= 321)
    {
      this.setState({icon: this.weatherIcon.Drizzle});
    }
    else if(rangeId >= 500 && rangeId <= 531)
    {
      this.setState({icon: this.weatherIcon.Rain});
    }
    else if(rangeId >= 600 && rangeId <= 622)
    {
      this.setState({icon: this.weatherIcon.Snow});
    }
    else if(rangeId >= 701 && rangeId <= 781)
    {
      this.setState({icon: this.weatherIcon.Atmosphere});
    }
    else if(rangeId == 800)
    {
      this.setState({icon: this.weatherIcon.Clear});
    }
    else{
      this.setState({icon: this.weatherIcon.Clouds});
    }
  
  }


  getWeather = async e =>{

    const cityName = e.target.city.value;
    const countryName = e.target.country.value;
    e.preventDefault();

    if(cityName && countryName)
    {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${Api_key}`);

      const response = await api_call.json();


      const t = Math.floor((response.main.temp)-273.15);
      const mn = Math.floor((response.main.temp_min)-273.15);
      const mx = Math.floor((response.main.temp_max)-273.15);


      this.setState({
        city: response.name,
        country: response.sys.country,
        temp: t,
        min_temp: mn,
        max_temp: mx,
        description: response.weather[0].description,
        error: false
      });

      this.get_weatherIcons(response.weather[0].id);
    }
    else{
      alert("Please enter City and Country name");
    }
  }

  render(){
    return (
      <div className="App">
        <Forms loader={this.getWeather} />
        <Weather city={this.state.city}
        country={this.state.country}
        temp={this.state.temp}
        min_temp={this.state.min_temp}
        max_temp={this.state.max_temp}
        description={this.state.description}
        weatherIcon={this.state.icon}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
