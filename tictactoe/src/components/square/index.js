import React from "react";
import { Button } from './styles';

const Square = ({ value, onClick }) => {
    const style = value ? `squares ${value}` : `squares`;

    return (
        <Button className={style} onClick={onClick}>
            {value}
        </Button>
    );
};

export default Square;
