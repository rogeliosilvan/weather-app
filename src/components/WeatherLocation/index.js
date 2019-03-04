import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        /*this.state = {}... Solo dentro del constructor*/ 
        const { city } = props;
        this.state = {
            city,
            data: null,
        };

        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {

            return resolve.json();
        }).then(data =>{
            console.log("Resultado del handleUpdateClick");
            const newWeather = transformWeather(data);
            console.log(newWeather);
            // debugger;
            this.setState ({
                data: newWeather,
            });             
        });
       
    }
    render() {
        // console.log("render");
        const { onWeatherLocationClick } = this.props;
        const { city, data} = this.state;
        return (<div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}/>
            {data ? 
                <WeatherData data={data}/> :
                // "Cargando..."
                <CircularProgress size={50}/>
            }
        </div>)

        
    }
};

WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;