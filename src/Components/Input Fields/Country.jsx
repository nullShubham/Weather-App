import React, { useEffect, useState } from 'react'
import { useCntxt } from '../../Context/Context';
import useCountry from '../../Hooks/useCountry';
import useCity from '../../Hooks/useCity';
const Country = () => {
    const city = useCity()
    const [countryList, countryCode] = useCountry()
    const context = useCntxt()
    const handleChange = (e) => {
        context.setCountry(e.target.value)
        context.setCity([])
    }
    return (
        <div>
            <select onChange={handleChange} defaultValue="-- Select Country --" className="text-black select select-primary bg-white w-60 text-sm">
                <option disabled  >-- Select Country --</option>
                {countryList && countryList.map((country, index) => (
                    <option key={countryCode[index]} value={countryCode[index]}>{country}</option>
                ))}
            </select>
        </div>
    )
}

export default Country