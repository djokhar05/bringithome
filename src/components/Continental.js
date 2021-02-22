import React from 'react';
import FoodItem from './FoodItem';

const Continental = ({ continental }) => {

    console.log(continental);
    
    return (
        <FoodItem foodItems={continental} />
    )
}

export default Continental