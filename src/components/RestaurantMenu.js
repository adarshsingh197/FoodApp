import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-xl">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h2>
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")} -{" "}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}{" "}
      </h2>
      <p>
        {categories.map((x, index) => (
          <RestaurantCategory
            key={x.card.card.title}
            showItems={index === showIndex}
            data={x.card}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </p>
    </div>
  );
};

export default RestaurantMenu;
