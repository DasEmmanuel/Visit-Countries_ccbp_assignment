import './index.css'

const VisitedCoutryItem = props => {
  const {countryDetails, removeCountry} = props
  const {id, name, imageUrl} = countryDetails
  const onClickremove = () => {
    removeCountry(id)
  }
  return (
    <li className="VisitedCoutryItem">
      <img src={imageUrl} className="countryFlag" alt="thumbnail"/>
      <div>
        <p>{name}</p>
        <button type="button" onClick={onClickremove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCoutryItem
