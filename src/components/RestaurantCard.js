import { cdnurl } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData}=props;
    return(
        <div className="m-4 p-4 w-48 bg-gray-50">
            <img className="res-logo" alt="food image" src={cdnurl+resData.cloudinaryImageId}/>
            <h3>{resData.name}</h3>
            <h4 className="cuisinelist">{resData.cuisines.join(",")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;