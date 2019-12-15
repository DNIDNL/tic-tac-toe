import React from "react"
import { Board } from "."
import { SquareValue } from "components/square"

export default {
   title: "Board"
}

const squares: Array<SquareValue> = ["X", "O", "O", "O", "O", "O", "O", "X", "X"];

export const TheBoard = () => {
   return <Board squares={squares} onClick={e => alert('Square: ' + e + ' has value: ' + squares[e])} />
}
