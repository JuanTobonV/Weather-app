
import sunIcon from './assets/sun-icon.jpg' 
import arrowIcon from './assets/arrowIcon.png'
import humidityIcon from './assets/icons8-humidity-100.png'
import precipitationIcon from './assets/icons8-precipitation-100.png'
import windIcon from './assets/icons8-wind-100.png'





function App() {

  return (
    <>


      <main className=" flex justify-center h-fit w-full bg-linear-to-b from bg-neutral-900 text-white p-10">

        
      <form className="grid w-4/5 h-screen grid-cols-5 grid-rows-7 gap-4">
          <div className="col-span-5 grid">
            <input
              className="border-gray-400 border h-14 rounded-lg pl-2 bg-neutral-700"
              type="text"
              placeholder="Search for cities" 
            />
          </div>

          <div className="col-span-3 row-span-4 row-start-2 grid">
            <section className="bg-neutral-700 flex flex-col p-3 rounded-xl items-center justify-around ">
                  <div className='flex w-full pt-12 justify-around items-center '>
                    <div>
                      <p className='text-2xl font-semibold'>Medellin</p>
                      <p className='text-3xl font-semibold'>31°</p>
                    </div>
                    <div>
                      <img src={sunIcon} width="100px" height="100px" alt="Imagen sun" />
                    </div>
                  </div>

                  <p className='text-xl font-semibold'>Partially cloudy</p>
              </section>
          </div>

          <div className="col-span-2 row-span-4 col-start-4 row-start-2 grid">
            <section className="bg-neutral-700 flex items-center justify-center flex-col p-3 rounded-xl">
              
                  <div className='flex flex-col gap-3'>
                    <div className='flex gap-2'><img src={windIcon} width={22} alt="" /><p className='text-xl font-semibold'>Wind Speed: 0.1 km/h</p></div>
                    <div className='flex gap-2'><img src={humidityIcon} width={22} alt="" /><p className='text-xl font-semibold'>Humidity: 94.2%</p></div>
                    <div className='flex gap-2' ><img src={precipitationIcon} width={22} alt="" /><p className='text-xl font-semibold'>Precipitation: 0%</p></div>
                  </div>
                  
            </section>
          </div>

          <div className="col-span-5 row-span-2 row-start-6 ">
            <section className="bg-neutral-700 flex flex-col p-3 rounded-xl">
                    <h2 className='text-2xl font-semibold'>24 Hour Forecast</h2>
                    <div className='relative flex gap-10 justify-center'>
                      <button className='relative left-0 top-0 bottom-0'><img className='rotate-180 cursor-pointer' src={arrowIcon} width={35} alt="" /></button>
                      <div className='flex overflow-x-visible'>
                        <div className='flex flex-col items-center w-full'>
                          <p className='text-xl font-semibold'>6:00 AM</p>
                          <img src={sunIcon} width="80px" height="80px" alt="Imagen sun" />
                          <p className='text-xl font-semibold'>25°</p>
                        </div>
                      </div>
  
                      <div className='flex overflow-x-visible'>
                        <div className='flex flex-col items-center w-full'>
                          <p className='text-xl font-semibold'>6:00 AM</p>
                          <img src={sunIcon} width="80px" height="80px" alt="Imagen sun" />
                          <p className='text-xl font-semibold'>25°</p>
                        </div>
                      </div>
  
                      <div className='flex overflow-x-visible'>
                        <div className='flex flex-col items-center w-full'>
                          <p className='text-xl font-semibold'>6:00 AM</p>
                          <img src={sunIcon} width="80px" height="80px" alt="Imagen sun" />
                          <p className='text-xl font-semibold'>25°</p>
                        </div>
                      </div>
  
                      <div className='flex overflow-x-visible'>
                        <div className='flex flex-col items-center w-full'>
                          <p className='text-xl font-semibold'>6:00 AM</p>
                          <img src={sunIcon} width="80px" height="80px" alt="Imagen sun" />
                          <p className='text-xl font-semibold'>25°</p>
                        </div>
                      </div>

                      <button className='relative right-0 top-0 bottom-0'><img className='cursor-pointer' src={arrowIcon} width={35} alt="" /></button>

                    </div>
            </section>
          </div>
      </form>
    
        
      
        
      </main>
    </>
  )
}

export default App
