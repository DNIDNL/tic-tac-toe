import { useState, useCallback } from "react"
import { SquareValue } from "components/square"

export const calculateWinner = (squares: SquareValue[]) => {
   const winnerPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ]

   const filter = ([a, b, c]: number[]) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c]

   const found = winnerPatterns.find(filter) || []

   return squares[found[0]]
}

interface DefaultState {
   history: { squares: Array<SquareValue> }[]
   stepNumber: number
   xIsNext: boolean
}

export const useGame = () => {
   const [game, setGame] = useState<DefaultState>({
      history: [{ squares: [...Array(9)] }],
      stepNumber: 0,
      xIsNext: true
   })
   const click = useCallback(
      (i: number) => {
         const slicedHistory = game.history.slice(0, game.stepNumber + 1)
         const current = slicedHistory[slicedHistory.length - 1]
         const squares = current.squares.slice()
         if (calculateWinner(squares) || squares[i]) {
            return
         }

         squares[i] = game.xIsNext ? "X" : "O"

         setGame({
            ...game,
            history: [...slicedHistory, { squares }],
            stepNumber: slicedHistory.length,
            xIsNext: !game.xIsNext
         })
      },
      [game]
   )

   const jump = useCallback(
      (step: number) => {
         setGame({ ...game, stepNumber: step, xIsNext: step % 2 === 0 })
      },
      [game]
   )

   return { game, click, jump }
}
