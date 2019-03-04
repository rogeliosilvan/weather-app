import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATABill'

//actionCreator
const setCity = payload => ({ type: SET_CITY, payload });
const setForecatData = payload => ({type: SET_FORECAST_DATA, payload });

//

export const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
export const url = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {

    return dispatch => {

        // fetch o axios
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        // activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));
        
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(

            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecatData({ city: payload, forecastData }));
            }
        );
    };
};