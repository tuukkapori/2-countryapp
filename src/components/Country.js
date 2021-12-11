import React, { useEffect, useState } from 'react'
// import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY


const Country = ({ country, shouldBeOpen }) => {
  const [isOpen, setIsOpen] = useState(shouldBeOpen)

  const [weather, setWeather] = useState('')

  /* const getWeather = async () => {
    await axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
      )
      .then((response) => {
        console.log(response.data)
        setWeather(response.data)
      })
  } */

  useEffect(() => {
    setIsOpen(shouldBeOpen)
  }, [shouldBeOpen])
  

  const handleClick = (e) => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <div
      className="country"
      style={{
        background: isOpen ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
      }}
    >
      <button
        onClick={handleClick}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          visibility: 'visible',
          display: 'block',
        }}
      >
        <h2
          style={{
            fontSize: '50px',
            margin: '0px',
            textDecoration: 'underline',
          }}
          className="country-title"
        >
          {country.name.common}
        </h2>
      </button>
      {!isOpen ? null : (
        <div className="country-data-wrapper">
          <div className="country-data-left">
            <p>Capital:</p>
            <h4>{country.capital}</h4>
            <p style={{ marginTop: '10px' }}>Languages:</p>
            <ul style={{ padding: '0px' }}>
              {Object.values(country.languages).map((l) => (
                <h4>{l}</h4>
              ))}
            </ul>
            <p style={{ marginTop: '10px' }}>Region:</p>
            <h4>{country.region}</h4>
          </div>
          <div className="country-data-center">
            <img className="flag" src={country.flags.png}></img>
          </div>
          <div className="country-data-right">
            {!weather ? (
              'loading weather'
            ) : (
              <div>
                <p>Weather in {country.capital}</p>
                <br />
                <p>Temperature:</p>
                <p>{weather.current.temperature + ' celsius'}</p>
                <br />
                <p>Wind:</p>
                <p>
                  {weather.current.wind_speed} direction{' '}
                  {weather.current.wind_dir}
                </p>
                <br />
                <img
                  src={weather.current.weather_icons[0]}
                  alt="weather icon"
                ></img>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Country
