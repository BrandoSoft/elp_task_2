import React, { FC } from 'react';
import { ComponentData} from '../types'

interface WeatherProps {
    data: ComponentData;
}

const WeatherInfo: FC<WeatherProps> = ({ data }) => {
    return(
        <div>
            <h1>{data.title}</h1>
            <p>Temp: {data.temp}&#8451;</p>
            <p>Humidity: {data.humidity}%</p>
        </div>
    )
}

export default WeatherInfo;