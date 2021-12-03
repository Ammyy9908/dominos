import React from 'react'

import "./CartItem.css"
import {MdDelete} from 'react-icons/md'
import { connect } from 'react-redux'
import { Decrement, Increment, RemoveItem } from '../../redux/actions/_appAction'


function CartItem({item,removeItem,qty,Increment,Decrement}) {

    const handleRemove = ()=>{
        removeItem(item.id)
    }

    const handleIncrement = ()=>{
        Increment(item.id)
    }

    const handledecrement = ()=>{
        Decrement(item.id)
    }
    return (
        <div className="cart-item">
            <div className="cart-item-top">
               
                <div className="cart-item-meta">
                    <h5>{item.name}</h5>
                    <p>Classic delight with 100% real mozzarella cheese</p>
                    <strong>Regular</strong>
                </div>
            </div>

            <div className="cart-item-footer">
                <div className="cart-item-controls">
                    <button onClick={qty<2?handleRemove:handledecrement}>{qty<2?<MdDelete/>:"-"}</button>
                    <span>{qty}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <div className="cart-item-price">{item.price}</div>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch)=>({
    removeItem:(id)=>dispatch(RemoveItem(id)),
    Increment:(id)=>dispatch(Increment(id)),
    Decrement:(id)=>dispatch(Decrement(id))
})
export default connect(null,mapDispatchToProps)(CartItem)
