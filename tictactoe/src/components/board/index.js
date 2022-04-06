import React from "react";
import Square from "../square/index";
import { BoardStyle } from './styles';

const squares = Array(9).fill(null);

const Board = () => (
    <BoardStyle >
        {squares.map((i) => (
            <Square key={i} />
        ))}
    </BoardStyle>
);

export default Board;
