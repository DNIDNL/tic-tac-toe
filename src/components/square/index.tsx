import React from "react"
import styles from "./styles.module.scss"

export type SquareValue = "X" | "O" | undefined

interface SquareProps {
   onClick: (e: any) => {}
   value: SquareValue
}

export const Square = (props: SquareProps) => (
   <button className={styles.square} onClick={props.onClick}>
      {props.value}
   </button>
)
