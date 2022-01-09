import React from 'react'
import { Menu, MenuItem } from "semantic-ui-react";
import vehicle from './assets/technology/image-launch-vehicle-portrait.jpg';
import capsule from './assets/technology/image-space-capsule-portrait.jpg';
import spaceport from './assets/technology/image-spaceport-portrait.jpg';

const Technology = () => {
    const storedValueAsNumber = Number(localStorage.getItem("technologyState"));
    const [technologyState, setTechnologyState] = React.useState(Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0);
    const handleSelectedImg = (e, { id: selectedImg }) => {
        setTechnologyState(selectedImg);
    };
    React.useEffect(() => {
        localStorage.setItem("technologyState", String(technologyState))
    }, [technologyState])

    const technologyImages = [
        vehicle,
        capsule,
        spaceport
    ];

    const technologyDetailes = [
        {
            name: "LAUNCH VEHICLE",
            details: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        },
        {
            name: "SPACE CAPSULE",
            details: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",

        },
        {
            name: "SPACEPORT",
            details: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        }
    ]
    return (
        <div className='technology'>
            <div>
                <div className='technology-heading'>
                    <h5><span>03</span> SPACE LAUNCH 101</h5>
                </div>
                <Menu className='technology-buttoncontainer'>
                    <Menu.Item
                        id={0}
                        active={technologyState === 0}
                        onClick={handleSelectedImg}
                        key={0}
                    >

                        <button className='technology-buttoncontainer-button' >
                            <h4>1</h4>
                        </button>

                    </Menu.Item>
                    <Menu.Item
                        id={1}
                        active={technologyState === 1}
                        onClick={handleSelectedImg}
                        key={1}
                    >
                        <button className='technology-buttoncontainer-button' >
                            <h4>2</h4>
                        </button>

                    </Menu.Item>

                    <Menu.Item
                        id={2}
                        active={technologyState === 2}
                        onClick={handleSelectedImg}
                        key={2}
                    >
                        <button className='technology-buttoncontainer-button' >
                            <h4>3</h4>
                        </button>
                    </Menu.Item>
                </Menu>
                <div className='technology-content'>
                    <span>THE TERMINOLOGY…</span>
                    <h3>{technologyDetailes[technologyState].name}</h3>
                    <p>
                        {technologyDetailes[technologyState].details}
                    </p>
                </div>
            </div>

            <div className='technology-images'>
                <img src={technologyImages[technologyState]} alt='moon' />
            </div>

        </div>
    )
}

export default Technology
