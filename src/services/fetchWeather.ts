import axios from "axios";
import { currentConditions } from "../types/WeatherType";

export async function fetchWeather(){

    const URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Medellin/today?unitGroup=metric&key=GXQ7C6R6WRMZY2XTDDFMUL9UE&contentType=json'

    try {
        const response = await axios.get(URL);
        console.log(response.data);
    }
    catch(error){
        if (axios.isAxiosError(error) && error.response) {
            console.log(error.response);
        }
    }
}

export const apiResponse = fetchWeather()

