import React, { useState } from "react";
import Board from "../board/index";
import { Title, Container } from './styles';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const xO = xIsNext ? "X" : "O";


    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];

        if (squares[i]) return;

        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXIsNext(!xIsNext);
    };

    return (
        <Container>
            <Title>
                Welcome to Tic Tac Toe!
            </Title>
            <Board squares={history[stepNumber]} onClick={handleClick} />
        </Container>
    );
};

export default Game;
