import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";
const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall(); // eslint-disable-next-line 
    }, [endpoint]);

    const makeApiCall = async () => {
        const res = await fetchDataFromAPI(endpoint);
        setData(res);
    };

    return { data };
};
export default useFetch;
