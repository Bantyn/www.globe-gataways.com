import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import React, { useState } from "react";

gsap.registerPlugin(useGSAP);

export default function navbar() {
useGSAP(()=>{
gsap.from(".nav-links,.nav-logo,.nav-icons",{
y:30,
opacity:0,
duration:0.5,
stagger:.1
})
})
const [menuOpen, setMenuOpen] = useState(false);

return (
  <>
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-logo">Globe Gateways</div>
        <span className="bi-vertical-bar">|</span>

        <div className={`nav-items ${menuOpen ? "show" : "" }`}>
          <div className="nav-links">
            <a href="#">Latest Articles</a>
            <span className="rLine"></span>
            <span className="lLine"></span>
          </div>
          <span className="bi-vertical-bar">|</span>

          <div className="nav-links">
            <a href="#">Photo Of The Day</a>
            <span className="rLine"></span>
            <span className="lLine"></span>
          </div>
          <span className="bi-vertical-bar">|</span>

          <div className="nav-links">
            <a href="#">About Us</a>
            <span className="rLine"></span>
            <span className="lLine"></span>
          </div>
        </div>
      </div>

      <div className="nav-right">
        <div className="nav-icons">
          <i className="bi bi-search"></i>
        </div>
        <span className="bi-vertical-bar">|</span>
        <div className="nav-links">
          <a href="#">Subscribe</a>
          <span className="rLine"></span>
          <span className="lLine"></span>
        </div>

        <span className="bi-vertical-bar">|</span>

        {/* Toggle button */}
        <div className="nav-icons nav-links" onClick={()=> setMenuOpen(!menuOpen)}>
          <i className="bi bi-list-nested"></i>
        </div>
      </div>

      {/*
      <div>
        <i className="bi bi-person-fill"></i>
      </div>
      <div>
        <i className="bi bi-facebook"></i>
      </div>
      <div>
        <i className="bi bi-whatsapp"></i>
      </div>
      <div>
        <i className="bi bi-chevron-left"></i>
      </div>
      <div>
        <i className="bi bi-bookmark"></i>
      </div>
      <div>
        <i className="bi bi-bookmark-fill"></i>
      </div>
      <div>
        <i className="bi bi-chat-left-text-fill"></i>
      </div>
      <div>
        <i className="bi bi-arrow-up-right"></i>
      </div>
      <div>
        <i className="bi bi-emoji-heart-eyes"></i>
      </div>
      */}
    </div>
</>
);
}