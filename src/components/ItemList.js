import React from "react";
import { cdnurl } from "../utils/constants";
const ItemList = (props) => {
  // Check if props.item exists
  console.log("2222222222222222222");
  console.log(props);
  if (!props.items) {
    return <p>No item data available</p>;
  }

  // Check if itemCards or categories exist and are not empty
  const items = props.items;

  return (
    <div>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div className="py-2 border-2 relative flex justify-between" key={index}>
            <div className=" w-10/12 flex flex-col justify-start items-center mt-4">
              <p className="font-bold"> {item.card.info.name || item.title} </p>
              <p>{item.card.info.price / 100}</p>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <img className="rounded-lg w-2/12 h-3/6" src={cdnurl+item.card.info.imageId} alt="image of the food"/>
            <button  className="border-none absolute right-1  bottom-2 p-2 rounded-lg bg-black text-white">Add +</button>
          </div>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

export default ItemList;
