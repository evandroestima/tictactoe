import React from "react";
import Square from "../square/index";
import { BoardStyle } from './styles';


const Board = ({ squares, onClick }) => (
    <BoardStyle >
        {squares.map((square, i) => (
            <Square onClick={() => onClick(i)} value={square} key={i} />
        ))}
    </BoardStyle>
);

export default Board;
