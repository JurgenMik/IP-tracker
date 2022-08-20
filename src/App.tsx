import React, { useState } from 'react';
import Arrow from './assets/icon-arrow.svg';
import axios from 'axios';
import Map from './components/Map';

function App() {

     interface resInterface {
        ip: string,
        address: string,
        timezone: string,
        isp: string,
        lat: number,
        lng: number,
    }

    const [location, setLocation] = useState<string>('');
    const [ipData, setData] = useState<resInterface>({
        ip: '',
        address:'',
        timezone:'',
        isp: '',
        lat: 0,
        lng: 0,
    });

    const getLocationData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const apiKey = 'at_8mNQ5ojf6nhZByp4NIj0O8e9PJXr8';
        const { data } = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${location}`);
            setData({
                ip: data.ip,
                address: data.location.city,
                timezone: data.location.timezone,
                isp: data.isp,
                lat: data.location.lat,
                lng: data.location.lng,
            })
    };

    return (
    <div className="h-screen w-full">
        <div className="bg-pattern-texture bg-cover w-full h-1/4 relative z-50">
            <div className="flex justify-center text-white text-4xl font-medium">
                <h1 className="mt-10">
                    IP Address Tracker
                </h1>
            </div>
            <div className="flex justify-center mt-10 w-full">
                <form  onSubmit={getLocationData} className="w-1/3">
                    <input className="w-full p-4 rounded-xl relative"
                           placeholder="Search for any IP adress or domain"
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setLocation(e.target.value)}}
                    />
                    <button type='submit' className="float-right bg-sky-400 absolute p-4 h-14 -ml-4 rounded-tr-lg rounded-br-lg bg-slate-900">
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
                                {ipData.ip}
                            </h1>
                        </div>
                    </div>
                    <div className="mt-10 w-1/5">
                        <p>LOCATION</p>
                        <div className="mt-4 sm:text-xl text-lg text-black">
                            <h1>
                                {ipData.address}
                            </h1>
                        </div>
                    </div>
                    <div className="mt-10 w-1/5">
                        <p>TIMEZONE</p>
                        <div className="mt-4 sm:text-xl text-lg text-black">
                            <h1>
                                {ipData.timezone}
                            </h1>
                        </div>
                    </div>
                    <div className="mt-10 w-1/5">
                        <p>ISP</p>
                        <div className="mt-4 sm:text-xl text-lg text-black sm:mb-0 mb-2">
                            <h1>
                                {ipData.isp}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="map" className="h-3/4 w-full">
            <Map {...ipData}/>
        </div>
    </div>
  );
}

export default App;
