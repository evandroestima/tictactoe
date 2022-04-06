import React from "react";
import { Button } from './styles';

const Square = ({ value, onClick }) => {
    console.log(value)
    return (
        <Button current={value} onClick={onClick}>
            {value}
        </Button>
    );
};

export default Square;
