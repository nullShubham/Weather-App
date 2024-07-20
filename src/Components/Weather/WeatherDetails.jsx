import React from 'react'
import useWeather from '../../Hooks/useWeather';
import { useCntxt } from '../../Context/Context';


function getDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const fullDate = `${day}-${month}-${year}`
  const dayOfWeek = today.getDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[dayOfWeek];
  return [dayName, fullDate]
}



const WeatherDetails = () => {
  const weather = useWeather();
  const location = useCntxt()

  const date = getDate()
  return (
    <div className='grow '>
      <div className="w-full justify-center container mx-auto">
        <div className="flex gap-10 w-full px-16 ">
          <div

            className="w-full lg:w-1/2 flex rounded-lg bg-auto"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80")'
            }}
          >
            <div className="rounded-lg py-6 pl-8 pr-32 w-full bg-blue-400 opacity-90 text-white">
              <div className="mb-20">
                <h2 className="font-bold text-3xl leading-none pb-1">{date[0]}</h2>
                <h3 className="leading-none pb-2 pl-1">{date[1]}</h3>
                <p className="flex aling-center opacity-75 w-36">
                  <svg
                    className=" w-4 inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 425.963 425.963"
                    style={{ enableBackground: "new 0 0 425.963 425.963" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081   c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002   c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482   C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884   c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"
                          data-original="#000000"
                          className="active-path"
                          data-old_color="#000000"
                          fill="#FFFFFF"
                        />
                      </g>
                    </g>
                  </svg>
                  {location.city}, {location.country}
                </p>
              </div>
              <div>
                <svg
                  className="w-16 mb-2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 129 129"
                  enableBackground="new 0 0 129 129"
                >
                  <g>
                    <path
                      d="m64.5,92.6c15.5,0 28-12.6 28-28s-12.6-28-28-28-28,12.6-28,28 12.5,28 28,28zm0-47.9c11,0 19.9,8.9 19.9,19.9 0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>

                <strong className="leading-none text-6xl block font-weight-bolder">
                  {weather ? weather.main ? `${Math.floor(weather.main.temp)}ºC` : <span className='text-base'>No Data</span> : <span className='text-base'>Loading..</span>}
                </strong>
                <b className="text-2xl block font-bold">{weather ? weather.weather ? weather.weather[0].temp : "No data" : "Loading..."}</b>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex ">


            <div className=" bg-blue-200 text-gray-600 p-8 lg:rounded-r-lg w-full">
              <div className="flex justify-between  mb-4 w-full"> {/* w-64*/}
                <div className="w-auto font-bold uppercase text-90">
                  Air Speed
                </div>
                <div className="w-auto text-right">{weather ? `${weather.wind ? `${weather.wind.speed}Mph` : "no data"}` : <span className='text-xs'>Loading..</span>}</div>
              </div>
              <div className="flex justify-between  mb-4 w-full"> {/* w-64*/}
                <div className="w-auto font-bold uppercase text-90">Humidity</div>
                <div className="w-auto text-right">{weather ? `${weather.main ? `${weather.main.humidity}%` : "no data"}` : <span className='text-xs'>Loading..</span>}</div>
              </div>
              <div className="flex justify-between mb-8 w-full"> {/* w-64*/}
                <div className="w-auto font-bold uppercase text-90">Wind</div>
                <div className="w-auto text-right">12 Mph</div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WeatherDetails