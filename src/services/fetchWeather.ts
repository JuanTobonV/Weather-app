import { currentConditions } from "../types/weatherType";

export async function fetchWeather(): Promise<currentConditions> {

    const URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Medellin/today?unitGroup=metric&key=GXQ7C6R6WRMZY2XTDDFMUL9UE&contentType=json'

    try {
        const response = await fetch(URL);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)        
        }

        const json = await response.json();
        console.log(json);
        return json as currentConditions;

    } catch (error) {
        console.log(error, "paila");
        throw error;
    }
}

export const apiResponse = fetchWeather().then((data) => {
    console.log(data.humidity);
}).catch((error) => {
    console.error(error);
});

