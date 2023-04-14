import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/headphone-prod-2.webp";

import "./Search.scss";
// import useFetch from "../../../hooks/useFetch";
// import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for product" />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={prod} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">product name</span>
              <span className="desc">product desc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
