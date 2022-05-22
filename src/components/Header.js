import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import man from "../media/man.png";
import "./common/styles/Header.css";


function Header( {search , setSearch}) {
  
  return (
    <>
    <div className="header">
      <Link to="/">
        <div className="text">Movie Rating</div>
      </Link>
      <form className="d-flex" role="search">
        
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button className="btn btn-outline-success" type="submit">Search</button>
        
      </form>
      <div className="user-image">
        <img src={man} alt=" user image not found!" width="80rem" />
      </div>
    </div>
   
    </>
  );
}

export default Header;

