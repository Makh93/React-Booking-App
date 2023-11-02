import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./HomeComponent/Home";
import Room from "./Components/Room";
import Destination from "./Components/Destination";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import resort from "../src/Images/resort.jpg";
import night from "./Images/night.jpg";
import AboutUs from "./Components/AboutUs";
import frau from "./Images/frau.jpg";
import luftballon from "./Images/luftballon.jpg";
import Main from "./HomeComponent/Main";
import maldives from "./Images/maldives.jpg";
import beach from "./Images/beach.jpg";
import egypt from "./Images/egypt.jpg";
import france from "./Images/france.jpg";
import canada from "./Images/canada.jpg";
import london from "./Images/london.jpg";
import resortRoom from "./Images/resortRoom.jpg";
import apartments from "./Images/apartments.jpg";
import bedroom from "./Images/bedroom.jpg";
import lakeview from "./Images/lakeview.jpg";
import outerView from "./Images/outerView.jpg";
import arab from "./Images/arab.jpg";
import greece from "./Images/greece.jpg";
import nightView from "./Images/nightView.jpg";
import MyContext from "../src/Components/context";
import Breakfast from "./Images/Breakfast.jpg";
import GameRoom from "./Images/GameRoom.jpg";
import schuttle from "./Images/schuttle.jpg";
import swimmingpool from "./Images/swimmingpool.jpg";
import spa from "./Images/spa.jpg";
import food from "./Images/food.jpg";
function App() {
  const pic = {
    resort: resort,
    night: night,
    frau: frau,
    luftballon: luftballon,
    maldives: maldives,
    beach: beach,
    egypt: egypt,
    canada: canada,
    london: london,
    france: france,
    resortRoom: resortRoom,
    apartments: apartments,
    bedroom: bedroom,
    lakeview: lakeview,
    outerView: outerView,
    arab: arab,
    greece: greece,
    nightView: nightView,
    GameRoom: GameRoom,
    schuttle: schuttle,
    spa: spa,
    swimmingpool: swimmingpool,
    Breakfast: Breakfast,
    food: food,
  };

  return (
    <div className="App">
      <div></div>

      <MyContext.Provider value={pic}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Main />} />
            <Route path="main" element={<Main />} />
            <Route path="room" element={<Room />} />
            <Route path="destination" element={<Destination />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="footer" element={<Footer />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
