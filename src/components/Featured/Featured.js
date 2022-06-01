import React from "react";

import "./Featured.css";

import House1 from "../../assets/house1.jpg";
import Living1 from "../../assets/living1.jpg";
import Kichen1 from "../../assets/kichen1.jpg";
import Bed2 from "../../assets/bed2.jpg";
import Bath2 from "../../assets/bath2.jpg";

import House3 from "../../assets/house3.jpg";
import Living2 from "../../assets/living2.jpg";
import Kichen3 from "../../assets/kitchen3.jpg";
import Bar3 from "../../assets/bar3.jpg";
import Pool3 from "../../assets/pool3.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Featured Listings</h1>
      <p className="featured-text">Selected listings by City, State, & Zip based onn views.</p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src={House1} alt="" />
        <img src={Living1} alt="" />
        <img src={Kichen1} alt="" />
        <img src={Bed2} alt="" />
        <img src={Bath2} alt="" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>1020 Premier Way SW, Calgary, Alberta T2T1L5</h2>
            <p>House for Sale</p>
            <p className="price">$2,225,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>5</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>7,251</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$14,797</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            Welcome to this executive estate residence located in the highly regarded community of
            Upper Mount Royal. Over 5,000sf of total living space this modern contemporary home
            features 4 bedrooms, 3 full baths + 2 half baths, a lower level boasting high ceilings,
            in-floor heat, a media room, PLUS a golf simulator area.
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>

      <div className="container">
        <img className="order-2" src={Living2} alt="" />
        <img className="order-3" src={Kichen3} alt="" />
        <img className="span-3 image-grid-row-2 order-1" src={House3} alt="" />
        <img className="order-4" src={Bar3} alt="" />
        <img className="order-5" src={Pool3} alt="" />

        <div className="span-2 right-img-details order-7">
          <p>
            This exceptional newly completed grand-scale luxury estate residence is situated on a
            prized .53 acre view property and located in the confines of Vancouver. The
            architectural elegance and grandeur with its bold white brick exterior and beautiful
            landscape create an impressive majestic presence and features over eleven thousand three
            hundred square feet of formal and informal living on three expansive levels.
          </p>
          <button className="btn">View Listing</button>
        </div>

        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>1126 Wolfe Avenue Vancouver, British Columbia V6H1V8</h2>
            <p>House for Sale</p>
            <p className="price">$24,880,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>7</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>8</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>23,139</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment:</p>
                <p>$56,836</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
