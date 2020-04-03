import React from 'react';
import "./RandomeChooseOptions.css"

const RandomChooseOption = (props) => {
    return (
        <div>
            <h4>Please, select your preferentions:</h4>
            <button value="vegetarian" onClick={(e) => props.addTag(e, "value")}>Vegetarian</button>
            <button value="vegan" onClick={(e) => props.addTag(e, 'value')}>Vegan</button>
            <button value="glutenFree" onClick={(e) => props.addTag(e, 'value')}>Gluten Free</button>
            <button value="dairyFree" onClick={(e) => props.addTag(e, 'value')}>Dairy Free</button>
            <h4>Please, select meal type:</h4>
            <button value="breakfast" onClick={(e) => props.addTag(e, 'value')}>Breakfast</button>
            <button value="soup" onClick={(e) => props.addTag(e, 'value')}>Soup</button>
            <button value="main course" onClick={(e) => props.addTag(e, "value")}>Main Course</button>
            <button value="salad" onClick={(e) => props.addTag(e, 'value')}>Salad</button>
            <button value="dessert" onClick={(e) => props.addTag(e, 'value')}>Dessert</button>
            <button id="getRandomRecipts" onClick={props.getData}>Get Recipts!</button>
        </div>
    );
}

export default RandomChooseOption;