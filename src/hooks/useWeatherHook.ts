import { useState } from "react"
import { apiResponse } from "../services/fetchWeather"

export const useWeatherHook = () => {

    const [weather, setWeather] = useState(apiResponse);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    
    }

    return {
        handleSubmit,
        setWeather,
        weather,
    }
}