import { useEffect, useState } from "react"
import { currentConditions } from "../types/WeatherType"
import axios from "axios";

export const useWeatherHook = () => {
    const [weather, setWeather] = useState<currentConditions>();
    const [selectedCity, setSelectedCity] = useState('')
    // const [userCurrentLocation, setUserCurrentLocation]

    useEffect(() => {

        // const userCurrentLocation = navigator.geolocation.getCurrentPosition(() => {

        // });



        const fetchWeather = async () => {
          try {
            const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/today?unitGroup=metric&include=current%2Chours&key=GXQ7C6R6WRMZY2XTDDFMUL9UE&contentType=json`);
            const data = response.data;

            console.log(data);

            const selectedData: currentConditions = {
                humidity: data.currentConditions.humidity,
                precip: data.currentConditions.precip,
                windspeed: data.currentConditions.windspeed,
                temp: data.currentConditions.temp,
                conditions: data.currentConditions.conditions,
                cityName: data.address,
                forecast: data.days[0].hours

            };
            setWeather(selectedData);

            console.log(data.days[0].hours);
            
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }

        
        };
        fetchWeather();
      }, [selectedCity]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    
    }

    return {
        handleSubmit,
        setWeather,
        weather,
        setSelectedCity,
    }
}