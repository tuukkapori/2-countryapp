import React, { useEffect, useState } from 'react'
// import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY

const testcountry = {
  name: {
    common: 'Kenya',
    official: 'Republic of Kenya',
    nativeName: {
      eng: {
        official: 'Republic of Kenya',
        common: 'Kenya',
      },
      swa: {
        official: 'Republic of Kenya',
        common: 'Kenya',
      },
    },
  },
  tld: ['.ke'],
  cca2: 'KE',
  ccn3: '404',
  cca3: 'KEN',
  cioc: 'KEN',
  independent: true,
  status: 'officially-assigned',
  unMember: true,
  currencies: {
    KES: {
      name: 'Kenyan shilling',
      symbol: 'Sh',
    },
  },
  idd: {
    root: '+2',
    suffixes: ['54'],
  },
  capital: ['Nairobi'],
  altSpellings: ['KE', 'Republic of Kenya', 'Jamhuri ya Kenya'],
  region: 'Africa',
  subregion: 'Eastern Africa',
  languages: {
    eng: 'English',
    swa: 'Swahili',
  },
  translations: {
    ara: {
      official: 'جمهورية كينيا',
      common: 'كينيا',
    },
    ces: {
      official: 'Keňská republika',
      common: 'Keňa',
    },
    cym: {
      official: 'Republic of Kenya',
      common: 'Kenya',
    },
    deu: {
      official: 'Republik Kenia',
      common: 'Kenia',
    },
    est: {
      official: 'Keenia Vabariik',
      common: 'Keenia',
    },
    fin: {
      official: 'Kenian tasavalta',
      common: 'Kenia',
    },
    fra: {
      official: 'République du Kenya',
      common: 'Kenya',
    },
    hrv: {
      official: 'Republika Kenija',
      common: 'Kenija',
    },
    hun: {
      official: 'Kenyai Köztársaság',
      common: 'Kenya',
    },
    ita: {
      official: 'Repubblica del Kenya',
      common: 'Kenya',
    },
    jpn: {
      official: 'ケニア共和国',
      common: 'ケニア',
    },
    kor: {
      official: '케냐 공화국',
      common: '케냐',
    },
    nld: {
      official: 'Republiek Kenia',
      common: 'Kenia',
    },
    per: {
      official: 'جمهوری کنیا',
      common: 'کنیا',
    },
    pol: {
      official: 'Republika Kenii',
      common: 'Kenia',
    },
    por: {
      official: 'República do Quénia',
      common: 'Quénia',
    },
    rus: {
      official: 'Республика Кения',
      common: 'Кения',
    },
    slk: {
      official: 'Kenská republika',
      common: 'Keňa',
    },
    spa: {
      official: 'República de Kenya',
      common: 'Kenia',
    },
    swe: {
      official: 'Republiken Kenya',
      common: 'Kenya',
    },
    urd: {
      official: 'جمہوریہ کینیا',
      common: 'کینیا',
    },
    zho: {
      official: '肯尼亚共和国',
      common: '肯尼亚',
    },
  },
  latlng: [1, 38],
  landlocked: false,
  borders: ['ETH', 'SOM', 'SSD', 'TZA', 'UGA'],
  area: 580367,
  demonyms: {
    eng: {
      f: 'Kenyan',
      m: 'Kenyan',
    },
    fra: {
      f: 'Kényane',
      m: 'Kényan',
    },
  },
  flag: '🇰🇪',
  maps: {
    googleMaps: 'https://goo.gl/maps/Ni9M7wcCxf8bJHLX8',
    openStreetMaps: 'https://www.openstreetmap.org/relation/192798',
  },
  population: 53771300,
  gini: {
    2015: 40.8,
  },
  fifa: 'KEN',
  car: {
    signs: ['EAK'],
    side: 'left',
  },
  timezones: ['UTC+03:00'],
  continents: ['Africa'],
  flags: {
    png: 'https://flagcdn.com/w320/ke.png',
    svg: 'https://flagcdn.com/ke.svg',
  },
  coatOfArms: {
    png: 'https://mainfacts.com/media/images/coats_of_arms/ke.png',
    svg: 'https://mainfacts.com/media/images/coats_of_arms/ke.svg',
  },
  startOfWeek: 'monday',
  capitalInfo: {
    latlng: [-1.28, 36.82],
  },
  postalCode: {
    format: '#####',
    regex: '^(d{5})$',
  },
}

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
