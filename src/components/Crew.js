import React from 'react'
import { Menu, MenuItem } from "semantic-ui-react";
import douglasimg from './assets/crew/image-douglas-hurley.png';
import markimg from './assets/crew/image-mark-shuttleworth.png';
import victorimg from './assets/crew/image-victor-glover.png';
import ansariimg from './assets/crew/image-anousheh-ansari.png';
const Crew = () => {
    const storedValueAsNumber = Number(localStorage.getItem("state"));
    const [state, setState] = React.useState(Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0);
    const handleSelectedCrew = (e, { id: selectedThumbhnail }) => {
        setState(selectedThumbhnail);
    };
    React.useEffect(() => {
        localStorage.setItem("state", String(state))
    }, [state])


    const CrewDetailes = [
        {
            heading: "COMMANDER",
            name: "DOUGLAS HURLEY",
            about: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            heading: "MISSION SPECIALIST",
            name: "MARK SHUTTLEWORTH",
            about: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            heading: "PILOT",
            name: "VICTOR GLOVER",
            about: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
        },
        {
            heading: "FLIGHT ENGINEER",
            name: "Anousheh Ansari",
            about: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
        },
    ]

    const crewImages = [
        douglasimg,
        markimg,
        victorimg,
        ansariimg
    ]

    return (
        <div className='crew'>
            <div className='crew-container'>

                <h5><span>02</span> MEET YOUR CREW</h5>
                <h4>{CrewDetailes[state].heading}</h4>
                <h3>{CrewDetailes[state].name}</h3>
                <p>{CrewDetailes[state].about}</p>
                <Menu className='crew-container-buttoncontainer'>
                    <Menu.Item
                        id={0}
                        active={state === 0}
                        onClick={handleSelectedCrew}
                        key={0}
                    >
                        <button className='crew-container-buttoncontainer-button' />


                    </Menu.Item>
                    <Menu.Item
                        id={1}
                        active={state === 1}
                        onClick={handleSelectedCrew}
                        key={1}
                    >
                        <button className='crew-container-buttoncontainer-button' />

                    </Menu.Item>

                    <Menu.Item
                        id={2}
                        active={state === 2}
                        onClick={handleSelectedCrew}
                        key={2}
                    >
                        <button className='crew-container-buttoncontainer-button' />
                    </Menu.Item>
                    <MenuItem
                        id={3}
                        active={state === 3}
                        onClick={handleSelectedCrew}
                        key={3}
                    >
                        <button className='crew-container-buttoncontainer-button' />
                    </MenuItem>
                </Menu>
            </div>
            <div className='crew-images'>
                <img src={crewImages[state]} alt='crew members' />
            </div>
        </div>
    )
}

export default Crew
