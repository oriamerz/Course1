import React, { useState, useEffect } from 'react';

import { fetchDailyData } from '../../api';
import styles from './Charts.module.css';

import { Line, Bar } from 'react-chartjs-2';



const Chart = ({data, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            // const dailyData = await fetchDailyData(); //2
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);


    const lineChart = (

        dailyData.length ? (
            <Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }]
            }} />) : null

    );
    const barChart = (

        dailyData.length ? (
            <Bar data={{
                labels: ['Recovered', 'Confirmed', 'Deaths'],
                datasets: [
                  {
                    label: '# of Votes',
                    data: [data.recovered.value, data.confirmed.value, data.deaths.value ],
                    backgroundColor: [
                      'green',
                      'yellow',
                      'black',
                    ],
                    borderColor: [
                        'green',
                        'yellow',
                        'black',
                    ],
                    borderWidth: 1,
                  },
                ],
              }} />) : null

    );

    return (
        <div className={styles.container}>
            {country.length? barChart : lineChart}
           
        </div>
    )
}

export default Chart;