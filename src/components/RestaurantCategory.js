import React from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    function handleClick() {
        setShowIndex();  // Call the function to update the index
    }

    return (
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg'>
            <div className='w-full flex justify-between' onClick={handleClick}>
                <p className='font-bold'>
                    {data.card.title} - {data.card.itemCards ? data.card.itemCards.length : 0}
                </p>
                <img className='w-1/12' src='https://icons.veryicon.com/png/o/miscellaneous/decon/dropdown-1.png' alt="dropdown icon"/>
            </div>
            {showItems && <ItemList items={data.card.itemCards} />} 
        </div>
    );
};

export default RestaurantCategory;
