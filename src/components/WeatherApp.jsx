import Searchbox from './Searchbox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp() {
    const [weatherInfo, setweatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.87,
        temp: 25.05,
        minTemp: 25.05,
        maxTemp: 25.05,
        humidity: 60,
        weather: "haze",

    })
    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Searchbox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}
