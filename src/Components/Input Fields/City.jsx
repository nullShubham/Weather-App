import React, { useEffect } from 'react'
import { useCntxt } from '../../Context/Context';
import useCity from '../../Hooks/useCity'
import useWeather from '../../Hooks/useWeather';
const City = () => {
    const context = useCntxt();
    const city = useCity();
    const data = useWeather();
    const handleChange = (e) => {
        context.setCity(e.target.value)
    }
    return (
        <div>
            <select onChange={handleChange} defaultValue="-- Select City --" className="select text-black select-primary bg-white w-60 text-sm">
                <option disabled  >-- Select City --</option>
                {city && city.map((city, index) => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>
        </div>
    )
}

export default City