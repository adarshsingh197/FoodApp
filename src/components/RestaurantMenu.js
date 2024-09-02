import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { menuapi } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams(); 
    const resInfo = useRestaurantMenu(resId)

 
    if (resInfo == null) {
        return <Shimmer />;
    }
    console.log(resInfo);

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
    console.log(itemCards);
    console.log(resInfo?.cards[2]?.card?.card?.info);
    const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info || {};

    return (
        <div className='menu'>
            <h1>{name}</h1>
            <h2>{cuisines?.join(",")} </h2>
            <p>{costForTwoMessage}</p>
            <ul>
                {
                    itemCards?.map((item) => {
                        return (
                            <li key={item.card.info.id}>{item.card.info.name} - {"Rs "} {item.card.info.price / 100}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default RestaurantMenu;
