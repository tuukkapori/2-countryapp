import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Info from './components/Info'
import './styles.css'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log(response.data.map((c) => c.languages))
      setCountries(response.data)
      setCountriesToShow(response.data)
    })
  }, [])

  const filterChange = (e) => {
    setCountryFilter(e.target.value)
    setCountriesToShow(
      countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      })
    )
  }

  return (
    <div className="app-component">
      <h1>Countries</h1>
      <label style={{marginBottom: "15px"}}>
        Find countries <br />
        <input value={countryFilter} onChange={filterChange} />
      </label>
      <Info countries={countriesToShow} onlyOneCountry={countriesToShow.length === 1} />
    </div>
  )
}

export default App
