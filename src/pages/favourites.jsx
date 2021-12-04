import React from 'react'
import { connect } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import PizzaCard from '../components/PizzaCard/PizzaCard';
import { SetCart } from '../redux/actions/_appAction';
import EmptyOrder from '../assets/empty_order.svg'
import "./favourites.css"

function Favourites({favourites,SetCart}) {
    return (
        <div>
             <Navbar/>
            <section className="main-section">
                <div className="section-wrapper">
                    {favourites.length===0?<div className="blank-favourites">
                    <img src={EmptyOrder} alt="Empty Order"/>
                        <h1>You don't have any favourite product yet.</h1>
                        </div>:<h1>Your Favourites</h1>}
                    <div className="favourites-body">

                    <div className="favourites-items">
                      
                      {
                          favourites.map((product)=>{
                              return <PizzaCard cover={product.item.cover} name={product.item.name} desc={product.item.dsecription} price={product.item.price} item={product.item} SetCart={SetCart}/>
                          })
                      }
                  </div>
                  
                    </div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
    favourites:state.appReducer.favourites
})

const mapDispatchToProp = (dispatch)=>({
    SetCart:(item)=>dispatch(SetCart(item))
})

export default connect(mapStateToProps,mapDispatchToProp)(Favourites);
