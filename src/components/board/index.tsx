import React from "react"
import { Square, SquareValue } from "components/square"
import styles from "./styles.module.scss"

interface BoardProps {
   onClick: (col: number) => any
   squares: SquareValue[]
}

const rows: Number[][] = [...new Array(9)]
   .map((x, i) => i)
   .reduce((acc: number[][], i: number) => {
      if (i % 3 === 0) return [...acc, [i]]
      acc[acc.length - 1].push(i)
      return acc
   }, [])

export const Board = ({ onClick, squares }: BoardProps) => (
   <div>
      {rows.map((cols: any, i) => (
         <div className={styles.boardRow} key={i}>
            {cols.map((col: any) => (
               <Square value={squares[col]} onClick={() => onClick(col)} key={col} />
            ))}
         </div>
      ))}
   </div>
)
