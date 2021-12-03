import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EmptyOrder from '../assets/empty_order.svg'
import OrderCard from "../components/OrderCard/OrderCard"
import Navbar from '../components/Navbar/Navbar'
import "./orders.css"

function Orders({orders}) {
    return (
        <div className="order-page">
            <Navbar/>
            <section className="main-section">
                <div className="section-wrapper">
                    {orders.length>0 && <h1>Your Orders</h1>}
                    <div className="orders">
                      
                        
                            {
                                orders.length>0 && orders.map((order)=>{
                                    return <OrderCard id={order._id} price={order.price} status={order.status} items={order.items}/>
                                })
                            }
                        
                        {orders.length===0 && <div className="blank-order">
                            <img src={EmptyOrder} alt="Empty Order"/>
                        <h1>You don't have any order yet</h1>
                        <Link to="/menu">Order Now</Link>
                        </div>}
                    </div>
                </div>
            </section>
        </div>
    )
}


const mapStateToProps = (state)=>({
    orders: state.appReducer.orders
})
export default connect(mapStateToProps,null)(Orders)
