import React from 'react';
import "./ListOfRecipies.css"

const ListOfRecipies = (props) => {
    let receiptArray = props.data.map((element, index) => {
        return (
            <div className="ReceiptItem" key={index}>
                <img src={element.image} alt={index} /><br></br>
                <h2>{element.title}</h2><br></br>
                <div dangerouslySetInnerHTML={{ __html: element.summary }}></div>
                <div dangerouslySetInnerHTML={{ __html: element.instructions }}></div>
                <div>{element.readyInMinutes && <h3>Time for preparing: {element.readyInMinutes}</h3>}<br></br></div>
                <div>{element.servings && <h3>Amount of portions: {element.servings}</h3>}</div><br></br>
            </div>
        )
    })
    return (
        <div className="ReceiptsBlock">
            {receiptArray}
        </div>
    )


}
export default ListOfRecipies;