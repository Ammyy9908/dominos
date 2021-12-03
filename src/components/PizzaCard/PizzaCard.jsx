import React from 'react'
import "./PizzaCard.css"
import {MdFavorite} from "react-icons/md"
import { connect } from 'react-redux';
import { Decrement, Increment, RemoveItem } from '../../redux/actions/_appAction';
function PizzaCard({cover,name,desc,price,size,SetCart,item}) {
   
 

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
                {/* <div className="piza-card-size">
                    <button>{size}</button>
                </div> */}
            </div>
            <div className="pizza-card-footer">
               <button onClick={handleItemAdd}>Add to cart</button>
               
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart:state.appReducer.cart
})

const mapDispatchToProps = (dispatch)=>({
    removeItem:(id)=>dispatch(RemoveItem(id)),
    Increment:(id)=>dispatch(Increment(id)),
    Decrement:(id)=>dispatch(Decrement(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(PizzaCard)
