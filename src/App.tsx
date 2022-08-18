import React from 'react';
import Arrow from './assets/icon-arrow.svg'

function App() {
  return (
    <div className="h-screen w-full">
        <div className="bg-pattern-texture bg-cover w-full h-1/4 relative">
            <div className="flex justify-center text-white text-4xl font-medium">
                <h1 className="mt-10">
                    IP Address Tracker
                </h1>
            </div>
            <div className="flex justify-center mt-10 w-full">
                <form className="w-1/3">
                    <input className="w-full p-4 rounded-xl relative" placeholder="Search for any IP adress or domain"/>
                    <button className="float-right bg-sky-400 absolute p-4 h-14 -ml-4 rounded-tr-lg rounded-br-lg bg-slate-900">
                        <img src={Arrow} alt="arrow"/>
                    </button>
                </form>
            </div>
            <div className="sm:h-44 h-auto bg-white sm:w-2/3  w-4/5 mt-16 rounded-lg absolute left-0 right-0 m-auto">
                <div className="flex sm:justify-between items-center sm:flex-row flex-col text-xs font-bold text-gray-500 sm:whitespace-normal whitespace-nowrap">
                    <div className="sm:ml-10 mt-10 w-1/5">
                       <p>IP ADDRESS</p>
                        <div className="mt-4 sm:text-xl text-lg text-black w-full">
                            <h1>
                                192.212.171.101
                            </h1>
                        </div>
                    </div>
                    <div className="mt-10 w-1/5">
                        <p>LOCATION</p>
                        <div className="mt-4 sm:text-xl text-lg text-black">
                            <h1>
                                Brooklyn, NY 10001
                            </h1>
                        </div>
                    </div>
                    <div className="mt-10 w-1/5">
                        <p>TIMEZONE</p>
                        <div className="mt-4 sm:text-xl text-lg text-black">
                            <h1>
                                UTC-05:00
                            </h1>
                        </div>
                    </div>
                    <div className="mt-10 w-1/5">
                        <p>ISP</p>
                        <div className="mt-4 sm:text-xl text-lg text-black sm:mb-0 mb-2">
                            <h1>
                                SpaceX Starlink
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
