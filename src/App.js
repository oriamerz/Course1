
import React from 'react';
//import ReactDom from 'react-dom';
import Cards from "./component/card/Cards.jsx";
//import CountryPicer from "./component/countryPicer/CountryPicer.jsx"
//import Chat from "./component/chat/Chat.jsx"
import  image from "./covid.png"
import styles from './App.module.css';

import { fetchDailyData,fetchCountries ,fetchData} from './api';

class App extends React.Component {

   state ={data: {},}
   async componentDidMount(){
    //const featchCountry1 = await fetchCountries();
    //console.log(featchCountry1.map((a)=>({a1: a})));
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
      console.log(this.state.data);
    }

    render(){
        return(
        <div className={styles.container}>
            <img src={image} alt='require function fllails'/>
            <Cards data={this.state.data}/>
        </div>
        )
    }

}

export default App;
