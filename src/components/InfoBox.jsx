import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import "./infobox.css"
export default function InfoBox({ info }) {

    let RAIN_IMG = "https://as1.ftcdn.net/v2/jpg/08/31/14/36/1000_F_831143616_ds1k8raazuRBKDveBEoPjpZkefp8KoeN.jpg"
    let HOT_IMG = "https://images.unsplash.com/photo-1553586635-60aba8bfda8b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let COLD_IMG = "https://images.unsplash.com/photo-1645895210119-e312ed9eb64f?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    return (
        <div className='infoBox'>
            <div className='card-container'>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia className='img'
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_IMG : info.temp > 20 ? HOT_IMG : COLD_IMG}
                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ? <ThunderstormOutlinedIcon /> : info.temp > 20 ? <LightModeOutlinedIcon /> : <AcUnitOutlinedIcon />}
                        </Typography>

                        <Typography variant="body2" color='text.primary' component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.minTemp}&deg;C</p>
                            <p>Max Temp = {info.maxTemp}&deg;C</p>
                            <p>Sea Level= {info.sealevel} kPa</p>
                            <p>The weather can be described as <i>{info.weather}</i> and Feels Like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
} LightModeOutlinedIcon