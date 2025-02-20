import sunIcon from './assets/sun-icon.jpg';
import arrowIcon from './assets/arrowIcon.png';
import humidityIcon from './assets/icons8-humidity-100.png';
import precipitationIcon from './assets/icons8-precipitation-100.png';
import windIcon from './assets/icons8-wind-100.png';

import { useWeatherHook } from './hooks/useWeatherHook';

function App() {
  const {
    handleSubmit,
    weather,
    handleInputChange,
    handleButtonClick
    
  } = useWeatherHook();



  return (
    <>
      <main className="flex justify-center h-fit w-full bg-linear-to-b from bg-neutral-900 text-white p-10">
        <form onSubmit={(e) => handleSubmit(e)} className="grid w-4/5 h-screen grid-cols-5 grid-rows-8 gap-4">
          <div className="col-span-5 grid gap-4">
            <input
              className="border-gray-400 border h-14 rounded-lg bg-neutral-700 col-span-2 px-2"
              type="text"
              placeholder="Search for cities"
              onChange={handleInputChange}
            />
            <div className='flex col-start-3 gap-2'>
              <button
               onClick={handleButtonClick}
               type='submit' className='bg-neutral-800 w-1/2 rounded-xl cursor-pointer hover:bg-neutral-600 transition-all'>
                Search
              </button>

              <button
                type='button'
                className='bg-neutral-800 col-start-3 w-1/2 rounded-xl cursor-pointer hover:bg-neutral-600 transition-all'
                
              >
                Use my current location
              </button>
            </div>
          </div>

          <div className="col-span-3 row-span-4 row-start-2 grid">
            <section className="bg-neutral-700 flex flex-col p-7 rounded-xl items-center justify-around">
              <div className='flex w-full pt-12 justify-around items-center gap-'>
                <div>
                  <p className='text-2xl font-semibold'>{weather?.cityName}</p>
                  <p className='text-3xl font-semibold'>{weather?.temp}°</p>
                </div>
                <div>
                  <img src={sunIcon} width="100px" height="100px" alt="Imagen sun" />
                </div>
              </div>
              <p className='text-xl font-semibold'>{weather?.conditions}</p>
            </section>
          </div>

          <div className="col-span-2 row-span-4 col-start-4 row-start-2 grid">
            <section className="bg-neutral-700 flex items-center justify-center flex-col p-3 rounded-xl">
              <div className='flex flex-col gap-3'>
                <div className='flex gap-2'><img src={windIcon} width={22} alt="" /><p className='text-xl font-semibold'>Wind Speed: {weather?.windspeed} km/h</p></div>
                <div className='flex gap-2'><img src={humidityIcon} width={22} alt="" /><p className='text-xl font-semibold'>Humidity: {weather?.humidity}%</p></div>
                <div className='flex gap-2'><img src={precipitationIcon} width={22} alt="" /><p className='text-xl font-semibold'>Precipitation: {weather?.precip}%</p></div>
              </div>
            </section>
          </div>

          <div className="w-full col-span-5 row-span-2 row-start-6">
            <section className="bg-neutral-700 flex flex-col p-3 rounded-xl">
              <h2 className='text-2xl font-semibold'>24 Hour Forecast</h2>
              <div className='flex justify-center my-4'>
                <button className='relative -left-5 top-0 bottom-0'><img className='rotate-180 cursor-pointer' src={arrowIcon} width={35} alt="" /></button>
                <div className='flex w-2/3 overflow-x-hidden gap-10'>
                  {weather?.forecast.map((condition, index) => (
                    <div key={index} className='relative flex gap-10 justify-center'>
                      <div className='flex overflow-x-visible'>
                        <div className='flex flex-col items-center w-full'>
                          <p>{condition.dateTime}AM</p>
                          <img src={sunIcon} width="80px" height="80px" alt="Imagen sun" />
                          <p className='text-xl font-semibold'>{condition.temp}°</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className='relative -right-5 top-0 bottom-0'><img className='cursor-pointer' src={arrowIcon} width={35} alt="" /></button>
              </div>
            </section>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
