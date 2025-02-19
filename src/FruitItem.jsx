import PropTypes from "prop-types"
import { useState } from "react"

const FruitItem = ({ fruit }) => {
  const [value, setValue] = useState(fruit ?? "")
  return (
    <div>
      <h1>FruitItem</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <FruitForm />
    </div>
  )
}

export default FruitItem

FruitItem.propTypes = {
  fruit: PropTypes.string,
}
