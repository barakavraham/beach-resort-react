import React, {useContext} from 'react';
import {RoomContext} from '../context';
import Loading from './Loading'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

function RoomContainer() {
    const { loading, sortedRooms, rooms } = useContext(RoomContext);
    if (loading) {
        return <Loading />;
    }

    return (
        <React.Fragment>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </React.Fragment>
    )
}

export default RoomContainer;