import React from "react";

import "./Featured.css";

import House1 from "../../assets/house1.jpg";
import Living1 from "../../assets/living1.jpg";
import Kichen1 from "../../assets/kichen1.jpg";
import Bed2 from "../../assets/bed2.jpg";
import Bath2 from "../../assets/bath2.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Featured Listings</h1>
      <p>Selected listings by City, State, & Zip based onn views.</p>
      <div className="container">
        <img src={House1} alt="" />
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
    </div>
  );
};

export default Featured;
