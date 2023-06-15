/** @format */

import React from "react";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/about">Store</Link>
        </div>
        <div className="home_headerRight">
          {/*Link */}
          <Link to="/about">Gmail</Link>
          <Link to="/about">Images</Link>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>
      <div className="home_body">
        <img
          src="	https://www.google.lk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
