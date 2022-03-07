import React, { FC } from 'react';
import { ComponentData} from '../types'

interface WeatherProps {
    data: ComponentData;
}

const WeatherInfo: FC<WeatherProps> = ({ data }) => {
    return(
        <div className='weather-info'>
            <h1 className='weather-info__title'>{data.title}</h1>
            <p className='weather-info__temp'>Temp: {data.temp}&#8451;</p>
            <p className='weather-info__humidity'>Humidity: {data.humidity}%</p>
        </div>
    )
}

export default WeatherInfo;