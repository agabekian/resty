import {useState} from 'react';
import axios from 'axios';
import './App.scss'
import Form from './Components/Form/Form.jsx';
import Results from "./Components/Results/Results.jsx";
import Header from "./Components/Header/index.jsx";
import Footer from "./Components/Footer/index.jsx"; // Import Axios

function App() {
    const [json, setJSON] = useState({}); // State to store API response data (JSON)

    function updateFormData(data) {
        // Optional: Updates state in App.js if needed (e.g., for displaying response)
        console.log('API response data:', data);
    }

    function callAPI(url, method, body) {
        console.log('Making dat API call ...', url, method, body); //neede async handling to display url

        axios({
            method: method, //very cool
            url: url,
            headers: {'Content-Type': 'application/json'}, // NEEDED for PUT !, a little odd,ASK
            data: body || {}, // Include body if provided for direct for post/put
        })
            .then(response => {
                setJSON(response.data); // Update state with response data after successful PUT
                updateFormData(response.data); // Optional: Pass data to updateFormData
            })
            .catch(error => console.error('API call error:', error));
    }

    return (
        <>
            <Header/>
            <Form callAPI={callAPI} updateFormData={updateFormData}/>
            <Results data={json}/> {/* Pass updated json state as prop */}
            <Footer/>
        </>
    );
}

export default App;
