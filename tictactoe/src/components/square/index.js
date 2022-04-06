import React from "react";
import { Button } from './styles';

const Square = ({ value, onClick, winnerSquares }) => {
    // console.log(winnerSquares ? winnerSquares : null);

    return (
        <Button current={value} onClick={onClick}>
            {value}
        </Button>
    );
};

export default Square;
