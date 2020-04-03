import React from 'react';
import './Buttons.css';

const Buttons = (props) => {

    return (
        <div className="buttons">
            <button onClick={props.randomOption}>Get Random Recipes</button>
            <button onClick={props.indridientOption}>Get Idea by Ingridients</button>
            <input className='enterAmount' type="number" placeholder="Enter amount of Recipes" value={props.numerOfReciepts} onChange={(e) => props.change(e, "value")}></input>
        </div>
    );
}
export default Buttons;