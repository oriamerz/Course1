import React, { useState, useEffect } from 'react';

import { fetchDailyData } from '../../api';
import styles from './Charts.module.css';

import { Line, Bar } from 'react-chartjs-2';



const Chart = ({ data, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            // const dailyData = await fetchDailyData(); //2
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    let errorStatment = dailyData.response === undefined ? "Loading chart" :
        "Sorry, can't get data for the chart because has error at the database of API covid (status of the response: " + dailyData.response.status + ")."
    //console.log(dailyData.length==undefined);
    const lineChart = (



        dailyData.length !== undefined && dailyData.length ? (
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
                    backgroundColor: 'rgba(254, 0, 0, 0.5)',
                    fill: true,
                }]
            }} />) : errorStatment

    );
    const barChart = (

        dailyData.length !== undefined && dailyData.length ? (
            <Bar data={{
                labels: ['Recovered', 'Confirmed', 'Deaths'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [data.recovered.value, data.confirmed.value, data.deaths.value],
                        backgroundColor: [
                            'rgba(0, 255, 0, 0.5);',
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        borderColor: [
                            'rgba(0, 255, 0, 0.5);',
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        borderWidth: 1,
                    },
                ],
            }} />) : errorStatment

    );

    return (
        <div className={styles.container}>
            {country.length ? barChart : lineChart}

        </div>
    )
}

export default Chart;