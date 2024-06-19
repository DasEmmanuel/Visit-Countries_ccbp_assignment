const CountryItem = props => {
  const {countryDetails, vistCountry} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    vistCountry(id)
  }

  return (
    <li>
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button onClick={onClickVisit}>Visit</button>
      )}
    </li>
  )
}

export default CountryItem
