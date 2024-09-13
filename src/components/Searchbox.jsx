import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";


import "./searchbox.css"

export default function Searchbox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "831f58af036d741ce8c0a23b21d17629";
    let GetweatherInfo = async () => {
        // eslint-disable-next-line no-useless-catch
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JsonResponse = await response.json();
            let result = {
                city: JsonResponse.name,
                temp: JsonResponse.main.temp,
                minTemp: JsonResponse.main.temp_min,
                maxTemp: JsonResponse.main.temp_max,
                humidity: JsonResponse.main.humidity,
                feelslike: JsonResponse.main.feels_like,
                weather: JsonResponse.weather[0].description,
                pressure: JsonResponse.main.pressure,
                sealevel: JsonResponse.main.sea_level
            }
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }

    }
    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city)
            let info = await GetweatherInfo();
            updateInfo(info);
            setCity("");
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError(true);
        }

    }
    return (
        <div className="card">
            <h1>Search For The Weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    required
                    value={city}
                    onChange={handleChange}
                    label="City Name"
                    variant="outlined"
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{ color: "red " }}>No Such Record Exist For This Place!</p>}
            </form>
        </div>
    );
}
