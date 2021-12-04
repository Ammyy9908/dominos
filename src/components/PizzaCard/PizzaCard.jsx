import React from 'react'
import "./PizzaCard.css"
import {MdFavorite,MdFavoriteBorder} from "react-icons/md"
import { connect } from 'react-redux';
import { AddFavourite, Decrement, Increment, RemoveFavourite, RemoveItem } from '../../redux/actions/_appAction';
function PizzaCard({cover,name,desc,price,AddFavourite,RemoveFavourite,SetCart,item,favourites}) {
   
 
    const isLiked = ()=>{
        return favourites.find(favourite=>favourite.item.id===item.id);
    }

    const handleItemAdd = ()=>{
        SetCart({item,qty:1});
    }


    const handleLike = ()=>{
        AddFavourite({item});
    }

    const handleDislike = ()=>{
        
        RemoveFavourite(item.id);
    }

    

    return (
        <div className="pizza-card">
            <div className="pizza-card-header">
                <img src={cover} alt="pizza-thumb" />
                <h3 className="item-price">&#8377; {price}</h3>
                <button className={`like-btn`} onClick={!isLiked()?handleLike:handleDislike}>{!isLiked()?<MdFavoriteBorder/>:<MdFavorite/>}</button>
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
    cart:state.appReducer.cart,
    favourites:state.appReducer.favourites
})

const mapDispatchToProps = (dispatch)=>({
    removeItem:(id)=>dispatch(RemoveItem(id)),
    Increment:(id)=>dispatch(Increment(id)),
    Decrement:(id)=>dispatch(Decrement(id)),
    AddFavourite:(favourite)=>dispatch(AddFavourite(favourite)),
    RemoveFavourite:(id)=>dispatch(RemoveFavourite(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(PizzaCard)
