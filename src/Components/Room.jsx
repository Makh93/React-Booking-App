import Footer from "./Footer";
import React, { useState, useContext } from "react";

import MyContext from "../Components/context";
import "../Components/Room.css";

export default function Room() {
  const pic = useContext(MyContext);

  const [ishovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div>
        <img style={{ height: "700px" }} src={pic.resort} alt="view" />
        <h1 className="heading" style={{ fontSize: "50px" }}>
          Rooms
        </h1>

        <h4 style={{ fontWeight: "200" }}>
          Our Rooms
          <h2 style={{ color: "rgb(10, 77, 63)" }}>Discover our Room</h2>
          <div
            className="classicRooms"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              style={{
                width: "28rem",
                height: "25rem",
                margin: "20px",
                marginBottom: "0px",
              }}
              src={pic.lakeview}
              alt=""
            />
            {ishovered && (
              <div
                className="hoverDiv"
                style={{
                  width: "300px",
                  marginLeft: "48rem",
                  marginBottom: "20px",
                }}
              >
                <h1>Lake view Room</h1>
                <h4>Twin Room</h4>
                <p style={{ color: "rgb(10, 77, 63)", fontSize: "25px" }}>
                  If you are going to use a passage Lorem Ipsum, you need to be
                  sure there isn't anything embarrassing hidden in the middle of
                  text.{"   "}
                  <b>From: $102 / Night</b>{" "}
                </p>
              </div>
            )}
            <img
              style={{
                width: "28rem",
                height: "25rem",
                margin: "20px",
                marginBottom: "0px",
              }}
              src={pic.bedroom}
              alt=""
            />
            {ishovered && (
              <div
                className="hoverDiv"
                style={{
                  width: "300px",
                  marginLeft: "48rem",
                  marginBottom: "20px",
                }}
              >
                <h1>Queen Room</h1>
                <h4>Twin Room</h4>
                <p style={{ color: "rgb(10, 77, 63)", fontSize: "25px" }}>
                  If you are going to use a passage Lorem Ipsum, you need to be
                  sure there isn't anything embarrassing hidden in the middle of
                  text.{"   "}
                  <b>From: $142 / Night</b>
                </p>
              </div>
            )}
            <img
              style={{
                width: "28rem",
                height: "25rem",
                margin: "20px",
                marginBottom: "0px",
              }}
              src={pic.apartments}
              alt=""
            />
            {ishovered && (
              <div
                className="hoverDiv"
                style={{
                  width: "300px",
                  marginLeft: "48rem",
                  marginBottom: "20px",
                }}
              >
                {" "}
                <h1>Apartment</h1>
                <h4>Twin Room</h4>
                <p style={{ color: "rgb(10, 77, 63)", fontSize: "25px" }}>
                  If you are going to use a passage Lorem Ipsum, you need to be
                  sure there isn't anything embarrassing hidden in the middle of
                  text.{"   "}
                  <b>From: $152 / Night</b>
                </p>
              </div>
            )}
          </div>
        </h4>
      </div>

      <Footer />
    </div>
  );
}
