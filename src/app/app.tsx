import React from "react"
import { calculateWinner, useGame } from "hooks/useGame"
import { Board } from "components/board"
import "./app.css"
import styles from "./app.module.scss"
import { RouteComponentProps } from "react-router"
import { Link } from "react-router-dom"

const App = (props: RouteComponentProps<{ step?: string }>) => {
    const { current, history, click, xIsNext } = useGame(Number(props.match.params.step || ""))

    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
        const desc = move ? "Go to move #" + move : "Go to game start"
        return (
            <li key={move}>
                <Link className={styles.history} to={`/${move}`}>
                    {desc}
                </Link>
            </li>
        )
    })

    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`

    return (
        <div className={styles.game}>
            <div className="game-board">
                <Board squares={current.squares} onClick={click} />
            </div>
            <div className={styles.gameInfo}>
                <div>{status}</div>
                <ul>{moves}</ul>
            </div>
        </div>
    )
}

export default App
