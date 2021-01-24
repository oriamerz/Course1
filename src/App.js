
import React from 'react';
//import ReactDom from 'react-dom';
import Cards from "./component/card/Cards.jsx";
import CountryPicer from "./component/countryPicer/CountryPicer.jsx"
import Charts from "./component/charts/Charts.jsx"
import image from "./covid.png"
import styles from './App.module.css';

import { fetchData } from './api';

class App extends React.Component {

    state = { data: {}, country: ''}
    async componentDidMount() {

        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
        console.log(this.state.data);
    }

    handleCoutryChange = async (country) =>{
        console.log(country);
        const fetchedData = await fetchData(country)
        this.setState({data: fetchedData, country: country})
        
    }

    render() {
        const {data, country} = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt='require function fllails' />
                <Cards className={styles.cards} data={data} />
                <CountryPicer handleCoutryChange={this.handleCoutryChange} />
                <Charts data={data} country={country}/>
            </div>
        )
    }

}

export default App;
