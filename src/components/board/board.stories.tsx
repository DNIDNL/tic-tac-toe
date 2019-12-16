import React from "react"
import { Board } from "."
import { SquareValue } from "components/square"

export default {
   title: "Board"
}

const squares: Array<SquareValue> = ["X", "O", "O", "O", "O", "O", "O", "X", "X"];

function onClick(column: number)
{
   alert('Square: ' + column + ' has value: ' + squares[column]);
}

export const TheBoard = () => {
   return <Board squares={squares} onClick={onClick} />
}
