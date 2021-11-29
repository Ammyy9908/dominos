import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PizzaCard from '../components/PizzaCard/PizzaCard'
import "./items.css"
import products from "../data/products"
import Footer from '../components/Footer/Footer'
import { connect } from 'react-redux'
import { SetCart } from '../redux/actions/_appAction'
import Cart from '../components/Cart/Cart'
function Items({SetCart}) {
    return (
        <div>
            <Navbar/>
            <section className="main-section">
                <div className="section-wrapper">
                    <h1>Pizzas</h1>
                    <div className="items">
                      
                        {
                            products.map((product)=>{
                                return <PizzaCard cover={product.cover} name={product.name} desc={product.dsecription} price={product.prices[0].charts[0].price} crust={[product.prices[0].charts,product.prices[1].charts,product.prices[2].charts]} item={product} SetCart={SetCart}/>
                            })
                        }
                    </div>
                </div>
            </section>
            <Cart/>
            <Footer/>
        </div>
    )
}

const mapDispatchToProp = (dispatch)=>({
    SetCart:(item)=>dispatch(SetCart(item))
})

export default connect(null,mapDispatchToProp)(Items)
