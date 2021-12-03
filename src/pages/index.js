import React from "react";
import Banner from "../components/Banner/Banner";
import ExploreCard from "../components/ExploreCard/ExploreCard";
import Footer from "../components/Footer/Footer";
import MetaInfo from "../components/MetaInfo/MetaInfo";
import Navbar from "../components/Navbar/Navbar";
import Offer from "../components/Offers/Offer";
import metaInfo from "../data/meta";
import locations from "../data/cities";
import "./index.css";
import Auth from "../components/Auth/Auth";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <section className="main-section">
        <div className="section-wrapper">
          <div className="section-header">
            <h1>Coupon & Offers </h1>
          </div>
          <div className="section-items">
            <Offer
              offer={
                "https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg"
              }
            />
            <Offer
              offer={
                "https://api.dominos.co.in/prod-olo-api/images/Home_Paytm_20210519.jpg"
              }
            />
            <Offer
              offer={
                "https://api.dominos.co.in/prod-olo-api/images/Home_airtel_30082020.jpg"
              }
            />
            <Offer
              offer={
                "https://api.dominos.co.in/prod-olo-api/images/Home_Freecharge_20210405.jpg"
              }
            />
            <Offer
              offer={
                "https://api.dominos.co.in/prod-olo-api/images/Dominos_Mobi_Home_20210503.jpg"
              }
            />
            <Offer
              offer={
                "https://api.dominos.co.in/prod-olo-api/images/Home_payzapp_20201029.jpg"
              }
            />
            <Offer
              offer={
                "https://api.dominos.co.in/prod-olo-api/images/Home_au_20201029.jpg"
              }
            />
          </div>
        </div>
      </section>

      <section className="main-section">
        <div className="section-wrapper">
          <div className="section-header">
            <h1>Explore </h1>
          </div>
          <div className="section-items">
            <ExploreCard
              logo={"https://www.dominos.co.in/assets/menu.png"}
              header={"Our Menu"}
              desc="Explore our range of delicious Pizzas,delivered in 30 minutes!"
              title="Discover Pizzas"
            />
            <ExploreCard
              logo={"https://www.dominos.co.in/assets/store.png"}
              header={"Nearby Store"}
              desc="Find a Domino's Pizza resturant near you"
              title="Find Domino's Store"
            />
            <ExploreCard
              logo={"https://www.dominos.co.in/assets/birthday.png"}
              header={"Birthday Party"}
              desc="Celebrate the joy of birthday with Fresh & Hot pizzas"
              title="Book now"
            />
            <ExploreCard
              logo={"https://www.dominos.co.in/assets/catering.png"}
              header={"Catering"}
              desc="Live Domino's Kitchen for weddings/corporate events"
              title="Book now"
            />
          </div>
        </div>
      </section>

      <section className="promotion-section">
        <div className="section-wrapper promotion-wrapper">
          <div className="promotion-thumb">
            <img
              src="https://www.dominos.co.in/assets/new_app_img.png"
              alt="promotion-thumb"
            />
          </div>
          <div className="promotion-content">
            <h2>Unlock Exclusive Offers</h2>
            <p>
              For lightning fast ordering experience download the dominos App
            </p>
            <div className="promotion-links">
              <a href="#playstore">
                <img
                  src="https://www.dominos.co.in/assets/play_store.png"
                  alt="play-store-icon"
                />
              </a>
              <a href="#appstore">
                <img
                  src="https://www.dominos.co.in/assets/app_store.png"
                  alt="app store icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="meta-data">
        {metaInfo.map((meta) => {
          return (
            <MetaInfo lines={meta.lines} heading={meta.heading} key={meta.id} />
          );
        })}
      </div>

      <div className="cities">
        {locations.map((city) => {
          return <span key={city.id}>{city.location}</span>;
        })}
      </div>
      <Auth/>
      <Footer />
    </div>
  );
};

export default Home;
