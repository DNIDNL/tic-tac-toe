import React from "react"
import { calculateWinner, useGame } from "hooks/useGame"
import { Board } from "components/board"
import "./App.css"
import styles from "./app.module.scss"
import style from "react-syntax-highlighter/dist/styles/hljs/agate"

const App = (props: any) => {
   const { game, click, jump } = useGame()

   const current = game.history[game.stepNumber]

   const winner = calculateWinner(current.squares)

   const moves = game.history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start"
      return (
         <li key={move}>
            <button className={styles.history} onClick={() => jump(move)}>
               {desc}
            </button>
         </li>
      )
   })

   const status = winner ? "Winner: " + winner : `Next player: ${game.xIsNext ? "X" : "O"}`

   return (
      <div className={styles.game}>
         <div className='game-board'>
            <Board squares={current.squares} onClick={click} />
         </div>
         <div className={styles.gameInfo}>
            <div>{status}</div>
            <ol>{moves}</ol>
         </div>
      </div>
   )
}

export default App
