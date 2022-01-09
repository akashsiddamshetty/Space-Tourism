import "./scss/CSS.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import homebgimg from './components/assets/home/background-home-desktop.jpg';
import destinationbgimg from './components/assets/destination/background-destination-desktop.jpg';
import crewbgimg from './components/assets/crew/background-crew-desktop.jpg';
import technology from './components/assets/technology/background-technology-desktop.jpg';
function App() {
  const storedValueAsNumber = Number(localStorage.getItem("state"));
  const [state, setState] = React.useState(Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0);
  const handleSelectPage = (e, { id: selectedPageId }) => {
    setState(selectedPageId);
  };

  React.useEffect(() => {
    localStorage.setItem("state", String(state))
  }, [state])

  const images = [
    homebgimg,
    destinationbgimg,
    crewbgimg,
    technology
  ]
  return (
    <>
      <div className="global" style={{ backgroundImage: `url(${images[state]})` }} >
        <Router>
          <Header state={state} handleSelectPage={handleSelectPage} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Destination" element={<Destination />} />
            <Route exact path="/Crew" element={<Crew />} />
            <Route exact path="/Technology" element={<Technology />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;