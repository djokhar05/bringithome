import React from 'react';
import FoodItem from './FoodItem';

const Local = ({ local }) => {
    
    return (
        <FoodItem foodItems={local} />
    )
}

export default Local