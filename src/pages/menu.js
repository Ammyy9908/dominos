import React from 'react'
import Footer from '../components/Footer/Footer'
import MenuCard from '../components/MenuCard/MenuCard'
import Navbar from '../components/Navbar/Navbar'
import "./menu.css"
import veg from "../assets/veg-pizza.png"
import nveg from "../assets/non-veg-pizza.png"
import mania from "../assets/pizza-mania.png"
import beverage from "../assets/beverage.png"
function Menu() {
    return (
        <div>
           <Navbar/>
           <div className="menu-banner">
               <img src="https://www.dominos.co.in/theme2/front/images/home/Safety_Merchandising_adaptation_1514x240px.jpg" alt="banner-thumb"/>
            </div>
           <div className="section">
               <div className="section-wrapper">
                   <div className="section-header">Menu</div>
                   <div className="menu-cards">
                    <MenuCard image={veg} type="Veg Pizzas" desc="A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier" category="veg"/>
                    <MenuCard image={nveg} type="Non veg Pizzas" desc="Choose your favourite non-veg pizzas from the Domino's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings" category="non-veg"/>
                    <MenuCard image={mania} type="Pizza Mania" desc="Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings" category="pizza-mania"/>
                    <MenuCard image={beverage} type="SIDES & BEVERAGES" desc="Complement your pizza with wide range of sides & beverages available at Domino's Pizza India" category="beverage"/>
                   </div>
               </div>
           </div>

           <Footer/>
        </div>
    )
}

export default Menu
