import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useData = () => {
    const [cars, setCars] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        axiosSecure.get('/cars')
        .then(res => setCars(res.data))
    }, [])
    return cars;
};

export default useData;