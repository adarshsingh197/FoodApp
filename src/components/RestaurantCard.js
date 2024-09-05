import { cdnurl } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData}=props;
    return(
        <div className="m-2 p-4 w-[250] h-[450] bg-gray-50 rounded-lg hover:bg-gray-300">
            <img className="h-4/6 w-full " alt="food image" src={cdnurl+resData.cloudinaryImageId}/>
            <h3 className=" font-bold py-3 text-l text-ellipsis overflow-hidden whitespace-nowrap">{resData.name}</h3>
            <h4 className="cuisinelist text-ellipsis overflow-hidden whitespace-nowrap">{resData.cuisines.join(",")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export const withPromotedlabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-md  left-2">Vegeterian</label>
                <RestaurantCard {...props}/>
            </div>
        )

    }
}
export default RestaurantCard;