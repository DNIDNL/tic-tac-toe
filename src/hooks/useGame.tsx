import { useState, useCallback, useEffect } from "react"
import { SquareValue } from "components/square"
import { useHistory, useLocation } from "react-router-dom"

export const calculateWinner = (squares: SquareValue[]) => {
    const winnerPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const filter = ([a, b, c]: number[]) =>
        squares[a] && squares[a] === squares[b] && squares[a] === squares[c]

    const found = winnerPatterns.find(filter) || []

    return squares[found[0]]
}

interface GameState {
    history: { squares: Array<SquareValue>; xWasLast: boolean }[]
    stepNumber: number
}

export const useGame = (step: number = 0) => {
    const history = useHistory()

    const [game, setGame] = useState<GameState>({
        history: [{ squares: [...Array(9)], xWasLast: true }],
        stepNumber: 0,
    })

    useEffect(() => {
        setGame({
            ...game,
            history: [...game.history],
            stepNumber: step,
        })
    }, [step])

    const click = useCallback(
        (col: number) => {
            const slicedHistory = game.history.slice(0, game.stepNumber + 1)
            const current = slicedHistory[slicedHistory.length - 1]
            const squares = [...current.squares]
            if (calculateWinner(squares) || squares[col]) {
                return
            }

            squares[col] = current.xWasLast ? "O" : "X"

            const newState = {
                ...game,
                history: [...slicedHistory, { squares, xWasLast: !current.xWasLast }],
                stepNumber: slicedHistory.length,
            }
            setGame(newState)
            history.push(`/${newState.stepNumber}`)
        },
        [game]
    )

    return {
        current: game.history[step],
        history: game.history,
        click,
        xIsNext: !game.history[step].xWasLast,
    }
}
