import React, { Component } from 'react';
import Header from './Header';
import Buttons from './Buttons';
import RandomChooseOption from './randomReciept/RandomChooseOption'
import IngridientChooseOption from './RecieptByIngridient/IngridientChooseOption';
import ListOfRecipies from './randomReciept/ListOfRecipies';

const API_KEY = "223b603b9397489bb403ef40ee0499ac";

class Culinary extends Component {
    constructor() {
        super();
        this.state = {
            recipesArray: [],
            tags: [],
            ingridients: "",
            numberOfRecipiepts: '',
            isClickedRandom: false,
            isClickedIngridient: false
        }
    }

    changeNumberOfRecipets = (e) => {
        e.preventDefault();
        this.setState({ numberOfRecipiepts: e.target.value })
    }


    showRandomOption = () => {
        if (this.state.isClickedRandom) {
            this.setState({ isClickedRandom: false });
        }
        else {
            this.setState({ isClickedRandom: true });
            this.setState({ isClickedIngridient: false });
        }
    }
    showIngridientOption = () => {
        if (this.state.isClickedIngridient) {
            this.setState({ isClickedIngridient: false });
        }
        else {
            this.setState({ isClickedIngridient: true });
            this.setState({ isClickedRandom: false });
        }
    }


    addTagsAndRecipies = (e) => {
        let tag = e.target.value;
        if (this.state.tags.length === 0) {
            this.setState(prevState => ({ tags: prevState.tags + tag }))
        }
        else {
            this.setState(prevState => ({ tags: prevState.tags + "," + tag }))
        }

    }
    addTags = (e) => {
        let tag = e.target.value;
        if (this.state.tags.length === 0) {
            this.setState(prevState => ({ tags: prevState.tags + tag }))
        }
        else {
            this.setState(prevState => ({ tags: prevState.tags + "," + tag }))
        }
    }
    addIngridients = (e) => {
        this.setState({ ingridients: e.target.value })
    }

    getRandomRecipts = () => {
        let newRecipts = [];
        fetch(`https://api.spoonacular.com/recipes/random?number=${this.state.numberOfRecipiepts}&tags=${this.state.tags.toString()}&apiKey=${API_KEY}`).then(data => data.json()).then(recipiept => {
            for (let i = 0; i < recipiept.recipes.length; i++) {
                let currectRecipiept = {};
                currectRecipiept.image = recipiept.recipes[i].image;
                currectRecipiept.title = recipiept.recipes[i].title;
                currectRecipiept.readyInMinutes = recipiept.recipes[i].readyInMinutes;
                currectRecipiept.servings = recipiept.recipes[i].servings;
                currectRecipiept.summary = recipiept.recipes[i].summary;
                currectRecipiept.instructions = recipiept.recipes[i].instructions;
                newRecipts.push(currectRecipiept);
            }
            this.setState({ recipesArray: newRecipts })
        })
    }

    getIntridientRecipts = () => {
        let newRecipts = [];
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.state.ingridients}&number=${this.state.numberOfRecipiepts}&ranking=1&apiKey=${API_KEY}`).then(data => data.json()).then(recipiept => {
            console.log(recipiept);
            for (let i = 0; i < recipiept.length; i++) {
                let currectRecipiept = {};
                currectRecipiept.image = recipiept[i].image;
                currectRecipiept.title = recipiept[i].title;
                currectRecipiept.readyInMinutes = recipiept[i].readyInMinutes;
                currectRecipiept.servings = recipiept[i].servings;
                currectRecipiept.summary = recipiept[i].summary;
                currectRecipiept.instructions = recipiept[i].instructions;
                newRecipts.push(currectRecipiept);
            }
            this.setState({ recipesArray: newRecipts })
        })

    }
    render() {
        return (
            <div>
                <Header />

                <Buttons randomOption={this.showRandomOption} indridientOption={this.showIngridientOption} numerOfReciepts={this.state.numberOfRecipiepts} change={this.changeNumberOfRecipets} />
                {this.state.isClickedRandom && <RandomChooseOption addTag={this.addTags} getData={this.getRandomRecipts} />}

                {this.state.isClickedIngridient && <IngridientChooseOption addIngridients={this.addIngridients} getData1={this.getIntridientRecipts} />}
                <ListOfRecipies data={this.state.recipesArray} />
            </div>
        );
    };
}

export default Culinary;