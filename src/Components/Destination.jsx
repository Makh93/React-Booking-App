import Footer from "./Footer";
import "./Destination.css";
import React, { useEffect, useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyContext from "../Components/context";
export default function Destination() {
  const pic = useContext(MyContext);

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <img style={{ height: "700px" }} src={pic.resort} alt="view" />

      <div>
        <h2 style={{ color: "rgb(10, 77, 63)", fontSize: "35px" }}>
          Destinations
        </h2>
      </div>

      <div>
        <h4 style={{ fontWeight: "200" }}>Populer Destinations</h4>
        <h1 style={{ fontSize: "45px", color: "rgb(10, 77, 63)" }}>
          Choose Your country
        </h1>
      </div>

      <Slider ref={sliderRef} {...settings} className="destinations">
        <div className="drop">
          <img style={{ marginLeft: "20px" }} src={pic.arab} alt="" />
          <div className="info">
            <h1>United Arab</h1>
            <p> 245€ per day</p>
          </div>
        </div>
        <div className="drop">
          <img style={{ marginLeft: "20px" }} src={pic.greece} alt="" />
          <div className="info">
            <h1>Greece</h1>
            <p> 445€ per day</p>
          </div>
        </div>
        <div className="drop">
          <img style={{ marginLeft: "20px" }} src={pic.london} alt="" />
          <div className="info">
            <h1>London</h1>
            <p> 250€ per day</p>
          </div>
        </div>
        <div className="drop">
          <img style={{ marginLeft: "20px" }} src={pic.egypt} alt="" />
          <div className="info">
            <h1>Egypt</h1>
            <p> 425€ per day</p>
          </div>
        </div>
        <div className="drop">
          <img style={{ marginLeft: "20px" }} src={pic.france} alt="" />
          <div className="info">
            <h1>France</h1>
            <p> 500€ per day</p>
          </div>
        </div>
        <div className="drop">
          <img style={{ marginLeft: "20px" }} src={pic.canada} alt="" />
          <div className="info">
            <h1>Canada</h1>
            <p> 745€ per day</p>
          </div>
        </div>
        <div className="drop">
          <img style={{ marginLeft: "20px" }} src={pic.maldives} alt="" />
          <div className="info">
            <h1>Maldives</h1>
            <p> 545€ per day</p>
          </div>
        </div>
      </Slider>

      <Footer />
    </div>
  );
}
