type forecastTypes = {
    dateTime: string
    temp: number
}

export type currentConditions = {
    humidity: number ,
    precip: number , 
    windspeed: number,
    temp:number,
    conditions: string,
    cityName: string,
    forecast: forecastTypes[];
}