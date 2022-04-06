import React, { useState, useEffect, useRef } from "react";
import Board from "../board/index";
import { Title, Container } from './styles';

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    //function taken from react docs
    function calculateWinner(squares) {
        console.log(history)
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const goToStep = step => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    }

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


    const useDidMountEffect = (func) => {
        const didMount = useRef(false);

        useEffect(() => {
            if (didMount.current && winner) {
                func();
            } else {
                didMount.current = true;
            }
        }, [func]);
    };



    useDidMountEffect(() => {
        alert("Game over! Winner is " + winner);
        goToStep(0)
    });

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
