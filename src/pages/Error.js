import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
            <Hero hero="roomsHero">
                <Banner title="404" subtitle="page not found">
                    <Link to="/" className="btn-primary">Back home</Link>
                </Banner>

            </Hero>
    )
}
