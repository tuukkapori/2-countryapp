import React, { useEffect } from 'react'
import Country from './Country'
import ErrorMessage from './ErrorMessage'

const infoStyle = {
  height: '100%',
  textAlign: 'center',
  width: '100%',
}

const Info = ({ countries, onlyOneCountry }) => {


  // Only shows countries if there are 1-10 results for search
  const showList = () => {
    return countries.length <= 10 && countries.length > 0
  }

  return (
    <ul style={infoStyle} key={'countrylist'}>
      { !showList()?
      <li key={"error"}><ErrorMessage key={"error"} countries={countries} /></li> :
      countries.map(country => <li key={country.name.common}><Country country={country} shouldBeOpen={onlyOneCountry}/></li>)
      }
    </ul>
  )
}

export default Info
