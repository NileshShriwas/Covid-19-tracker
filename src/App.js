import React from 'react';
import { fetchData } from './api';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker } from './components';
// import coronaImage from './images/corona1.jpg';


class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country})
    }

    render() {
        const { data, country } = this.state;
        
        return (
            <div className={styles.container}>
             <h1>COVID-19 <br /> In The World</h1>
             
                {/* <img className={styles.image} src={coronaImage} alt="Covid-19" /> */}
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            <p> © Anushka Web 2020</p>
            </div>
        )
    }
    
}

export default App
