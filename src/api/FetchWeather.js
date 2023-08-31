import axios from 'axios';
//importing the Axios library, which is a popular JavaScript library used for making HTTP requests.

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';


export const FetchWeather = async (query) => {
    const {data} = await axios.get(URL,{
        params:{
            q: query, // Location query
            units: 'metric', // Units for weather data (metric system)
            APPID: API_KEY, // Your API key for authentication
        }

        
    });
  return data;
}



