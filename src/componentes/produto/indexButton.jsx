import React from "react";

import "./styleButton.css";

const Button = ({ type = "text", children, onClick }) => {
    return (
        <button className='produto-btn-adicionar' type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;