import React from "react"
import { Square, SquareValue } from "components/square"
import styles from "./styles.module.scss"

interface BoardProps {
   onClick: (col: number) => any
   squares: SquareValue[]
}

const rows: number[][] = [...new Array(9)]
   .map((x, i) => i)
   .reduce((acc: number[][], i: number) => {
      if (i % 3 === 0) return [...acc, [i]]
      acc[acc.length - 1].push(i)
      return acc
   }, [])

export const Board = ({ onClick, squares }: BoardProps) => (
   <div>
      {rows.map((row: number[], i) => (
         <div className={styles.boardRow} key={i}>
            {row.map((squareNumber: number) => (
               <Square value={squares[squareNumber]} onClick={() => onClick(squareNumber)} key={squareNumber} />
            ))}
         </div>
      ))}
   </div>
)
