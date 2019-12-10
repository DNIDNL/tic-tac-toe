import React, { useState } from "react"
import { Square, SquareValue } from "."

export default {
   title: "Square"
}
const values = [undefined, "X", "O"]

export const JustASquare = () => {
   const [value, setValue] = useState(0)

   return <Square value={values[value % 3] as SquareValue} onClick={() => setValue(value + 1)} />
}
