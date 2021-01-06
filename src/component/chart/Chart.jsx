import React, { useEffect } from 'react';
import { fetchDailyData } from '../../api';

const Charts = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect=(()=>{
    const fetchAPI = async () => {
        setDailyData = await (fetchDailyData())
    };
    
    });


    return (
        <h1>Cards</h1>
    )
}

export default Charts;