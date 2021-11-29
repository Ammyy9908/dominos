import React from 'react'
import "./Cart.css"
import {BsBag} from "react-icons/bs"
import { connect } from 'react-redux'
function Cart({cart}) {
    return (
        <div className="cart-fab">
           <div className="cart-icon">
               <BsBag/>
               <span className="cart-count">{cart.length}</span>
           </div>
        </div>
    )
}

const mapStateToProp = (state)=>({
    cart:state.appReducer.cart
})

export default connect(mapStateToProp,null)(Cart)
