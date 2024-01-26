const ShowWeather = ({ name, main, sys, weather, error }) => {

      return (<>
            <div className="p-3 bg-slate-800 rounded-sm w-90/vw">
                  <h2 className="text-green-100 font-mono text-4xl font-bold text-center">Weather</h2>
                  {error ? <h3 className="text-slate-100 font-mono mt-2 text-center">{error}</h3> :
                        <div className="mt-2 flex justify-center items-center flex-col gap-1 font-mono">
                              {name && <h3 className="text-slate-400 text-lg font-semibold">{name}, {sys.country}</h3>}
                              {main && <h3 className="text-orange-600 text-6xl font-bold">{Math.floor(main.temp - 272.15)}°C</h3>}
                              {main && <img className="text-slate-100 w-28 object-cover" src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />}
                              {main && <h4 className="text-slate-400 text-lg font-mono">{weather[0].main}</h4>}
                        </div>}
            </div>
      </>)
}

export default ShowWeather