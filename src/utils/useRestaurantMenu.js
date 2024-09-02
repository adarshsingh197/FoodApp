import { useEffect, useState } from "react"; // Import both useEffect and useState
import { menuapi } from '../utils/constants';

const useRestaurantMenu = (resId) => {
    const [ResInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]); // Add resId to the dependency array

    const fetchData = async () => {
        const data = await fetch(menuapi + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    return ResInfo;
};

export default useRestaurantMenu;
