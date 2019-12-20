import React, {useState} from "react"
import { Board } from "."
import { SquareValue } from "components/square"

export default {
   title: "Board"
}

const values: SquareValue[] = [undefined, "X", "O"];
const squaresDefault: Array<SquareValue> = new Array(9);

export const TheBoard = () => {
   const [squares, setSquares] = useState(squaresDefault)
   function onClick(square: number)
   {
      let nextVal = values[(values.indexOf(squares[square]) + 1) % 3]
      let squaresNow = squares.slice();
      squaresNow[square] = nextVal;
      setSquares(squaresNow)
   }

   return < Board squares={squares} onClick={onClick} />
}
