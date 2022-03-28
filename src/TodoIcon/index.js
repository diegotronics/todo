import React from "react";
import './TodoIcon.css';
import { FaCheck } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';

const iconTypes = {
    "check": color => (
        <FaCheck className="Icon-svg Icon-container--check" fill={color}/>
    ),
    "delete": color => (
        <span className="Icon-svg Icon-container--delete">X</span>
    ),
}

function  TodoIcon({type, color, onClick}) {
    return (
        <span
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };