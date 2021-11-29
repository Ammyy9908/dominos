import React from 'react'
import "./PizzaCard.css"
import {MdFavorite} from "react-icons/md"
import {BiDownArrow} from "react-icons/bi"

function SelectInput({label,crust}){

   
    return (
        <div className="custom-select">
                <span className="input-label">{label}</span>
                <div className="custom-select-input">
                <div className="custom-input-selector">
                    <span>Option</span>
                    <button>
                        <BiDownArrow/>
                    </button>
                </div>
                </div>
        </div>
    )
}
function PizzaCard({cover,name,desc,price,crust,SetCart,item}) {
    console.log(crust)

    const handleItemAdd = ()=>{
        SetCart({item,qty:1});
    }

    return (
        <div className="pizza-card">
            <div className="pizza-card-header">
                <img src={cover} alt="pizza-thumb" />
                <h3 className="item-price">&#8377; {price}</h3>
                <button className="like-btn"><MdFavorite/></button>
            </div>
            <div className="pizza-card-body">
                <h3>{name}</h3>
                <p>{desc}</p>
                <hr />
                <div className="piza-card-controls">
                    <SelectInput label="size"/>
                    <SelectInput label="Crust"/>
                </div>
            </div>
            <div className="pizza-card-footer">
                <a href="#" onClick={handleItemAdd}>Add to cart</a>
            </div>
        </div>
    )
}

export default PizzaCard
