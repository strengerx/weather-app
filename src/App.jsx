import { useEffect, useState } from "react";
import ShowWeather from "./ShowWeather";

const App = () => {

      // console.log(process.env.REACT_WEATHER_API_KEY);
      const [cityName, setCityName] = useState('');
      const [weather, setWeather] = useState({});
      const [error, setError] = useState("");
      const [cords, setCords] = useState({ lat: "22.5726", log: "88.3639" });

      // window.navigator.geolocation.getCurrentPosition(position => setCords({ lat: position.coords.latitude, lng: position.coords.longitude }));

      useEffect(() => {
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.log}&APPID=${import.meta.env.VITE_REACT_WEATHER_API_KEY}`;
            const weather = async (url) => {
                  try {
                        const response = await (await fetch(url)).json();
                        if (response.cod === 200) {
                              setWeather(response)
                              setError("")
                        } else {
                              setError("Weather Report Not Found")
                        }
                  } catch (e) {
                        console.log("Error fetching weather " + e);
                  }
            }

            weather(api);

      }, [])

      const result = () => {
            if (cityName) {
                  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${import.meta.env.VITE_REACT_WEATHER_API_KEY}`;
                  const getApiData = async (url) => {
                        try {
                              const response = await (await fetch(url)).json();
                              if (response.cod === 200) {
                                    setWeather(response)
                                    setError("")
                              } else {
                                    setError("Weather Report Not Found")
                              }
                        } catch (e) {
                              console.log("Error fetching weather " + e);
                        }
                  }
                  getApiData(api);
            }
      }

      const onFormSubmit = (event) => {
            event.preventDefault();
            result();
      }

      return (<>
            <div className="w-full h-svh bg-slate-950 flex flex-wrap justify-evenly items-center">
                  <form className="flex flex-wrap" onSubmit={onFormSubmit}>
                        <input value={cityName} onChange={e => setCityName(e.target.value)} className="p-2 border w-60 rounded-sm outline-none" type="text" placeholder="Search City" />
                        <button className="ml-2 capitalize py-2 px-4 rounded-sm border border-slate-100 bg-transparent text-slate-100" type="submit">search</button>
                  </form>
                  <ShowWeather {...weather} error={error} />
            </div>
      </>)
}

export default App
