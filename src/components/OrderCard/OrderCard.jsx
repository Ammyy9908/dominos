import React from 'react'
import "./OrderCard.css"
import {MdFavorite} from "react-icons/md"
function OrderCard({id,price,status,date,items}) {
    return (
        <div className={`order-card ${items[0].thumb && "order-card-flex"}`}>
           {items[0].thumb && <div className="order-card-thumb">
               <img src={items[0].thumb} alt="" />
           </div>}
           <div className="order-card-meta">
           <div className="order-card-header">
               <span className={`status-chip ${status}-chip`}></span>
                <button className="favourite-btn"><MdFavorite/></button>
            </div>
            <div className="order-card-body">
                <span className="item-count">{items.length} items</span>
                <span className="items">{
                    items.map(item=>item.name+",")
                }</span>
            </div>
            <div className="order-card-footer">
                <div className="order-footer-left">
                    {/* <span className="order-date">{new Date(date).getTime()}</span> */}
                    <span className="order-price">for amount of {price}</span>
                </div>
                
            </div>
           </div>
        </div>
    )
}

export default OrderCard
