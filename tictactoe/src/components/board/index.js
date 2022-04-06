import React from "react";
import Square from "../square/index";
import { BoardStyle } from './styles';


const Board = ({ squares, onClick, winnerSquares }) => (
    <BoardStyle >
        {squares.map((square, i) => (
            <Square onClick={() => onClick(i)} value={square} key={i} winnerSquares={winnerSquares} />
        ))}
    </BoardStyle>
);

export default Board;
