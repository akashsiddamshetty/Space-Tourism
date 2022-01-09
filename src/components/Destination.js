import React from 'react'
import moonimg from './assets/destination/image-moon.png';
import marsimg from './assets/destination/image-mars.png';
import europaimg from './assets/destination/image-europa.png';
import titanimg from './assets/destination/image-titan.png';
import { Menu, MenuItem } from "semantic-ui-react";
const Destination = () => {
    const storedValueAsNumber = Number(localStorage.getItem("destinationimgstate"));
    const [destinationimgstate, setdestinationimgstate] = React.useState(Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0);
    const handleSelectedImg = (e, { id: selectedImg }) => {
        setdestinationimgstate(selectedImg);
    };
    React.useEffect(() => {
        localStorage.setItem("destinationimgstate", String(destinationimgstate))
    }, [destinationimgstate])

    const destinationImages = [
        moonimg,
        marsimg,
        europaimg,
        titanimg,
    ];

    const destinationDetails = [
        {
            heading: "MOON",
            details: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400",
            time: "3 DAYS"
        },
        {
            heading: "MARS",
            details: " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 MIL.",
            time: "9 MONTHS"
        },
        {
            heading: "EUROPA",
            details: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. ",
            distance: "628 MIL.",
            time: "3 YEARS"
        },
        {
            heading: "TITAN",
            details: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 BIL.",
            time: "7 YEARS"
        }
    ]
    return (
        <div className='destination'>
            <div>
                <div className='destination-heading'>
                    <h5><span>01</span> PICK YOUR DESTINATION</h5>
                </div>
                <div className='destination-images'>
                    <img src={destinationImages[destinationimgstate]} alt='moon' />
                </div>
            </div>
            <div className='destination-content'>
                <Menu className='destination-content-menucontent'>
                    <Menu.Item
                        className='destination-content-menucontent-text'
                        id={0}
                        active={destinationimgstate === 0}
                        onClick={handleSelectedImg}
                        key={0}
                    >

                        MOON
                    </Menu.Item>
                    <Menu.Item
                        className='destination-content-menucontent-text'
                        id={1}
                        active={destinationimgstate === 1}
                        onClick={handleSelectedImg}
                        key={1}
                    >
                        MARS

                    </Menu.Item>

                    <Menu.Item
                        className='destination-content-menucontent-text'
                        id={2}
                        active={destinationimgstate === 2}
                        onClick={handleSelectedImg}
                        key={2}
                    >
                        EUROPA
                    </Menu.Item>
                    <MenuItem
                        className='destination-content-menucontent-text'
                        id={3}
                        active={destinationimgstate === 3}
                        onClick={handleSelectedImg}
                        key={3}
                    >
                        TITAN
                    </MenuItem>
                </Menu>
                <h2>{destinationDetails[destinationimgstate].heading}</h2>
                <p>
                    {destinationDetails[destinationimgstate].details}
                </p>
                <div className='destination-content-menucontent-line'>
                </div>
                <div className='destination-content-menucontent-disandtime'>
                    <div>
                        <span>AVG. DISTANCE</span>
                        <h5>{destinationDetails[destinationimgstate].distance} KM </h5>
                    </div>
                    <div>
                        <span>EST. TRAVEL TIME</span>
                        <h5>
                            {destinationDetails[destinationimgstate].time}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
