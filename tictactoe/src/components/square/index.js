import React from "react";
import { Button } from './styles';

const Square = ({ value, onClick }) => {
    return (
        <Button current={value} onClick={onClick}>
            {value}
        </Button>
    );
};

export default Square;
