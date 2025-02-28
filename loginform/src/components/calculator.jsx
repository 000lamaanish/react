import React, { useState } from "react";
import "./calc.css"; // Import CSS file

const Calculator = () => {
    const [input, setInput] = useState("");

    // Handle button click
    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    // Clear the input
    const handleClear = () => {
        setInput("");
    };

    // Evaluate the expression
    const handleCalculate = () => {
        try {
            setInput(eval(input).toString()); // Evaluates the expression safely
        } catch (error) {
            setInput("Error");
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={input} readOnly className="display" />
            <div className="buttons">
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={handleClear} className="clear">C</button>

                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("/")}>/</button>

                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("*")}>*</button>

                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick(".")}>.</button>
                <button onClick={handleCalculate} className="equals">=</button>
                <button onClick={() => handleClick("-")}>-</button>

                <button onClick={() => handleClick("+")} className="plus">+</button>
            </div>
        </div>
    );
};

export default Calculator;
