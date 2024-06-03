import './App.scss';
import axios from 'axios';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import React, {useState} from 'react';


const App = () => {
    const [data, setData] = useState([]);

    async function callApi() {
       const dataRX =
           await axios.get('https://swapi.dev/api/people');
        console.log(dataRX.data.results)
        const people = dataRX.data.results;
        console.log("PEOPLE",people)
        setData(people);
-m
        // this.setState({data, requestParams});
    }

    callApi();

    const ListItems = data.map((item) =>
        <li key={item.url}>{item.name}</li>
    )

    return (
        <>
            <Header/>
            {/*<div>Request Method: {this.state.requestParams.method}</div>*/}
            {/*<div>URL: {this.state.requestParams.url}</div>*/}
            <ul>
                {ListItems}
            </ul>

            {/*<Form handleApiCall={this.callApi}/>*/}
            {/*<Results data={this.state.data}/>*/}
            <Footer/>
        </>
    );
}

export default App;
