import React from 'react';
import './IngridientChooseOption.css'
const IngridientChooseOption = (props) => {
    return (
        <div className="IngridOption">
            <textarea onChange={props.addIngridients} placeholder="Enter ingridients, for example: eggs,butter,becon,pasta IMPORTANT enter ingridients ony by one using comma"></textarea>
            <button id="getRandomRecipts" onClick={props.getData1}>Get ideas!</button>
        </div>
    );
}

export default IngridientChooseOption;