import React, { useContext, useState } from "react";
import MyContext from "./context";
import Footer from "./Footer";
import "./About.css";
import { RiStarSFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
export default function AboutUs() {
  const pic = useContext(MyContext);


  const [mouseOn, setMouseOn]= useState(false)

  const handleMouseEnter=()=>{

setMouseOn(true)



  }


  const handleMouseLeave=()=>{

    setMouseOn(false)
    
    
    
      }


  return (
    <div>
      <img style={{ height: "700px" }} src={pic.resort} alt="view" />

      <div style={{ width: "500px", marginLeft: "75rem", marginTop: "20rem" }}>
        <h4 style={{ fontWeight: "300", color: "rgb(10, 77, 63)" }}>
          About Us
        </h4>
        <h2 style={{ fontSize: "40px", color: "rgb(10, 77, 63)" }}>
          A Best Place to Enjoy
        </h2>
        <p style={{ fontWeight: "300", fontSize: "25px" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          adipisci tempora officiis totam, asperiores magni amet doloremque!
          Saepe, excepturi sapiente!
        </p>
      </div>
      <img
        style={{ marginRight: "35rem", height: "500px", width: "400px" }}
        src={pic.greece}
        alt=""
      />
      <img
        style={{
          marginLeft: "-80px",
          height: "500px",
          width: "400px",
          position: "relative",
          bottom: "20rem",
          right: "35rem",
        }}
        src={pic.luftballon}
        alt=""
      />

      <div style={{ display: "flex", marginTop: "5rem" }}>
        <div className="container"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <img
            src={pic.food}
            alt="food"
            style={{ height: "450px", width: "650px" }}
          />
        
          {mouseOn && <button
            className="room1"
            style={{
              padding: "15px",
              fontsize: "18px",
            }}
          >
            delicious Food
          </button>}
        </div>
        <div className="container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            src={pic.swimmingpool}
            alt="swimmingpool"
            style={{ height: "450px", width: "650px" }}
          />
         
          {mouseOn &&<NavLink to= '/room'> <button
            className="room1"
            style={{
              padding: "15px",
              fontsize: "18px",
              fontWeight: "500",
            }}
          >
            Swimming Pool
          </button></NavLink> }
        </div>
        <div className="container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            src={pic.schuttle}
            alt="schuttle"
            style={{ height: "450px", width: "650px" }}
          />
        {mouseOn && <NavLink to = '/room'><button 
            className="room1"
            style={{
              padding: "15px",
              fontsize: "18px",
            }}
          >
            Airport Taxi
          </button></NavLink>}
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: "10rem" }}>
        <div className="container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            src={pic.spa}
            alt="spa"
            style={{ height: "450px", width: "650px" }}
          />
        
         {mouseOn && <NavLink to = '/room'> <button
            className="room1"
            style={{
              padding: "15px",
              fontsize: "18px",
            }}
          >
            Spa saloon
          </button></NavLink>}
        </div>
        <div className="container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            src={pic.Breakfast}
            alt="Breakfast"
            style={{ height: "450px", width: "650px" }}
          />
         
          {mouseOn && <button
            className="room1"
            style={{
              padding: "15px",
              fontsize: "18px",
            }}
          >
            Breakfast
          </button>}
        </div>
        <div className="container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            src={pic.GameRoom}
            alt="GameRoom"
            style={{ height: "450px", width: "650px" }}
          />
      {mouseOn && 
            <NavLink to = '/room'> <button
            className="room1"
            style={{
              padding: "15px",
              fontsize: "18px",
            }}
          >
            Gaming Rooms
          </button></NavLink> }
        </div>
      </div>

      <div>
        <h4 style={{ color: "rgb(10, 77, 63)", fontWeight: "200" }}>
          what say Clients
        </h4>
        <h1 style={{ fontsize: "25px", color: "rgb(10, 77, 63)" }}>
          Our Clients are Important to Us
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            justifyItems: "center",
            marginBottom: "8rem",
          }}
        >
          <div style={{ width: "500px" }}>
            <h3>
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </h3>
            <p>
              The Trip was incredible Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iste eius voluptates quas consectetur quidem
              assumenda aut quia. Animi ratione excepturi delectus cumque
              placeat. Minima corrupti, quasi molestiae.
            </p>
            <h2>Lily Monalisa</h2>
          </div>
          <div style={{ width: "500px" }}>
            {" "}
            <h3>
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </h3>
            <p>
              The Trip was incredible Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iste eius voluptates quas consectetur quidem
              assumenda aut quia. Animi ratione excepturi delectus cumque
              placeat. Minima corrupti, quasi molestiae.
            </p>
            <h2>Lily Monalisa</h2>
          </div>
          <div style={{ width: "500px" }}>
            {" "}
            <h3>
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </h3>
            <p>
              The Trip was incredible Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iste eius voluptates quas consectetur quidem
              assumenda aut quia. Animi ratione excepturi delectus cumque
              placeat. Minima corrupti, quasi molestiae.
            </p>
            <h2>Lily Monalisa</h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
