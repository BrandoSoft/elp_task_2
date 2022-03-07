export type WeatherData = OpenWeatherData | WeatherbitData;

export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface OpenWeatherData {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: {
        speed: number;
        deg: number;
    };
}

export interface WeatherbitData {
    rh: number,
    pod: string,
    lon: number,
    pres: number,
    timezone: string,
    ob_time: Date,
    country_code: string,
    clouds: number,
    ts: number,
    solar_rad: number,
    state_code: string,
    city_name: string,
    wind_spd: number,
    wind_cdir_full: string,
    wind_cdir: string,
    slp: number,
    vis: number,
    h_angle: number,
    sunset: string,
    dni: number,
    dewpt: number,
    snow: number,
    uv: number,
    precip: number,
    wind_dir: number,
    sunrise: string,
    ghi: number
    dhi: number,
    aqi: number,
    lat: number,
    weather: {
        icon: string,
        code: number,
        description: string
    },
    datetime: Date,
    temp: number,
    station: string,
    elev_angle: number,
    app_temp: number
}

export interface ComponentData  {
    temp?: number,
    humidity?: number,
    title?: string
}