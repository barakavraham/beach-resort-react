import React, {useEffect, useState} from 'react';
import items from './data';

const RoomContext = React.createContext();

function RoomProvider(props) {
    const [state, setState] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: false,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    })
        
    const formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => {
                return image.fields.file.url
            });
            let room = {...item.fields, images, id}
            return room
        })
        return tempItems
    }

    useEffect(() => {
        let rooms = formatData(items),
            maxPrice = Math.max(...rooms.map(item => item.price)),
            maxSize = Math.max(...rooms.map(item => item.size)),
            featuredRooms = rooms.filter(room => room.featured === true);
        setState({
            ...state,
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false,
            price: 0,
            maxPrice,
            maxSize
        })
    }, []);

    const getRoom = slug => {
        const tempRooms = [...state.rooms],
              room = tempRooms.find(room => room.slug === slug);
        return room;
    }

    const handleChange = event => {
        const target = event.target,
            value = target.type === "checkbox" ? target.checked : target.value,
            name = event.target.name,
            stateObj = {
                ...state,
                [name]: value
            };
        filterRooms(stateObj);
    };

    const filterRooms = (stateObj) => {
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = stateObj,
            tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);
        minSize = parseInt(minSize);
        maxSize = parseInt(maxSize);

        if (type !== 'all')
            tempRooms = tempRooms.filter(room => room.type === type);

        if (capacity !== 1)
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);

        if (breakfast)
            tempRooms = tempRooms.filter(room => room.breakfast === true);

        if (pets)
            tempRooms = tempRooms.filter(room => room.pets === true);

        tempRooms = tempRooms.filter(room => room.price >= price);
        tempRooms = tempRooms.filter(room => (minSize <= room.size && room.size <= maxSize));

        setState({
            ...stateObj,
            sortedRooms: tempRooms
        })
    }

    return (
        <React.Fragment>
            <RoomContext.Provider value={{...state, getRoom: getRoom,
            handleChange: handleChange
            }}>
                {props.children}
            </RoomContext.Provider>
        </React.Fragment>
    )
}


export {RoomProvider, RoomContext}