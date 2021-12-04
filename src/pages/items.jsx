import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PizzaCard from '../components/PizzaCard/PizzaCard'
import "./items.css"
import products from "../data/products"
import Footer from '../components/Footer/Footer'
import { connect } from 'react-redux'
import { SetCart } from '../redux/actions/_appAction'
import CartSection from '../components/CartSection/CartSection'
function Items({SetCart,type}) {

    const filtered = products.filter(item=>item.category===type)
    return (
        <div>
            <Navbar/>
            <section className="main-section">
                <div className="section-wrapper">
                    <div className="items-body">
                    <CartSection/>
                    <div className="items">
                      
                      {
                          filtered.map((product)=>{
                              return <PizzaCard cover={product.cover} name={product.name} desc={product.dsecription} price={product.price} item={product} SetCart={SetCart} size={product.size}/>
                          })
                      }
                  </div>
                  
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

const mapDispatchToProp = (dispatch)=>({
    SetCart:(item)=>dispatch(SetCart(item))
})

export default connect(null,mapDispatchToProp)(Items)
