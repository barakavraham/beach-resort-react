import React, {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    // get unique types
    let types = getUnique(rooms, 'type'),
        guests = getUnique(rooms, 'capacity');

    return (
        <section className="filter-container">
            <Title title="Search rooms" />
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        <option select="selected">all</option>
                        {types.map((type, index) => <option value={type} key={index}>{type}</option>)}
                    </select>
                </div>
                {/*end select type*/}
                {/*capacity*/}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select 
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {guests.map((capacity, index) => <option value={capacity} key={index}>{capacity}</option>)}
                    </select>
                </div>
                {/*end capacity*/}
                {/* Price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input 
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control" />
                </div>
                {/*end of Price */}
                {/* Size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            id="min-size"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input" />
                        <input
                            type="number"
                            name="maxSize"
                            id="max-size"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input" />
                    </div>
                </div>
                {/*end of Size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default RoomFilter;