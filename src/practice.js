import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

import CountUp from 'react-countup'; 
import cx from 'classnames';

import styles from './Cards.module.css'; 

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate }}) => {
    

    if(!confirmed){
        
        return 'Loading ...';
    } //2


    return (
        <div className={styles.container}> 
           <Grid container spacing={3} justify="center">
             <Grid item component={Card} xs={12} md={3} className={cx(styles.test, styles.infected)}>
                <CardContent>
             {/* <Grid item component={Card}>  */}
                 <Typography color="textSecondary" gutterBottom>Infected</Typography>
                 {/* <Typography variant="h5">{confirmed.value}</Typography> */}
                 <Typography variant="h5">
                     <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                 </Typography>
                 {/* <Typography color="textSecondary">REAL DATE</Typography> */}
                 <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                 <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent> 
             </Grid>
             <Grid item component={Card} xs={12} md={3} className={cx(styles.test, styles.recovered)}> 
             {/* <Grid item component={Card}> */}
               <CardContent>
                 <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                 <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator=","/></Typography>
                 {/* <Typography color="textSecondary">REAL DATE</Typography> */}
                 <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                 <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                </CardContent>
             </Grid>
             <Grid item component={Card} xs={12} md={3} className={cx(styles.test, styles.deaths)}> 
             {/* <Grid item component={Card}> */}
               <CardContent>
                 <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                 <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator=","/></Typography>
                 {/* <Typography color="textSecondary">REAL DATE</Typography> */}
                 <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                 <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
               </CardContent>
             </Grid>
           </Grid>
        </div>
        
    )
}

export default Cards;

state = { data: {},} //2

async componentDidMount(){
   const fetchedData = await fetchData();

   this.setState({ data: fetchedData}); //2
 }


 import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'; //2

import CountUp from 'react-countup'; 
import cx from 'classnames';

import styles from './Cards.module.css'; 

const Chats = ({ data: { confirmed, recovered, deaths, lastUpdate } }) =>
{ 
    if (!confirmed)
    {
        return "Loading...";
    }



return (
    <div className={styles.container}>

      

    
    </div>
 
        
    )
}

export default Chats;

import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl, StylesProvider} from '@material-ui/core';

// import styles from './CountryPicer.module.css';

import {fetchCountries} from '../../api';

const CountryPicker = ({handleCoutryChange}) => {
    const [ fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () => {
          setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);

    return(
        <FormControl>
            <NativeSelect>
               <option value="">Global</option>
              {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;