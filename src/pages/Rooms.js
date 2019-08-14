import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

export default function Rooms() {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="Our Rooms" subtitle="">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
            <RoomContainer />
        </React.Fragment>
    )
}

