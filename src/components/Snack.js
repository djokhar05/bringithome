import React from 'react';
import FoodItem from './FoodItem';

const Snack = ({ snack }) => {
    
    return (
        <FoodItem foodItems={snack} />
    )
}

export default Snack