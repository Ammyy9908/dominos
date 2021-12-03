import React from 'react'
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import "./CartSection.css"
function CartSection({cart}) {

    const prices = cart.map(pizza=>(pizza.qty*pizza.item.price))
    let total_price = 0;
    prices.forEach((price)=>total_price+=price);

   
    return (
        <div className="cart-section">
            <div className="cart-wrapper">

                {
                    cart.length>0 && <div className="cart-items">
                        {cart.map((item,index)=>{
                            return <>{item.qty>0 && <CartItem item={item.item} key={index} qty={item.qty}/>}</>
                        })}
                    </div>
                }
                {cart.length===0 && <div className="blank-cart">
                    <div className="blank-cart-image">
                        <img src="https://pizzaonline.dominos.co.in/static/assets/empty_cart.png" alt="empty-cart" />
                    </div>
                    <div className="empty-cart-footer">
                        <h3>Your cart is empty</h3>
                        <p>Please add some items from the menu.</p>
                    </div>
                </div>}

                {cart.length>0 && <div className="cart-section-footer">
                    <p className="cart-section-footer-text">
                        <span>Subtotal</span>
                        <span className="total-cart-price">₹ {total_price}</span>
                    </p>
                    <button className="checkout-btn">Checkout</button>
                </div>}
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    cart: state.appReducer.cart
})

export default connect(mapStateToProps,null)(CartSection);
