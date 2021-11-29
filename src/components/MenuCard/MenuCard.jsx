import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SetCart } from '../../redux/actions/_appAction'
import "./MenuCard.css"
function MenuCard({image,type,desc,SetCart}) {

    
    return (
        <div className="menu-card">
            <div className="menu-card-background">
                <img src={image} alt="card-thumb" />
            </div>
            <div className="card-overlay"></div>
            <div className="card-content">
                <h3>{type}</h3>
                <p>{desc}</p>
                <Link to="/item">View all</Link>
            </div>
        </div>
    )
}

const mapDispatchToProp = (dispatch)=>({
    SetCart:(item)=>dispatch(SetCart(item))
})

export default connect(null,mapDispatchToProp)(MenuCard)
