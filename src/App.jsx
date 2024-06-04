import { useState } from 'react';
import Form from './Components/Form/Form.jsx';
import axios from 'axios'; // Import Axios

function App() {
    const [json, setJSON] = useState({});

    function updateFormData(data) {
        // Optional: Update state in App.js if needed (e.g., for displaying response)
        console.log('API response data:', data);
    }

    function callAPI(url, method, body) {
        console.log('Making the API call ...', url, method, body);

        axios({
            method: method,
            url: url,
            headers: { 'Content-Type': method === 'POST' || method === 'PUT'
                    ? 'application/json' : undefined }, // Set header only for POST/PUT
            data: body || {}, // Include body if provided
        })
            .then(response => {
                updateFormData(response.data);
                // Handle successful DELETE request (optional)
                if (method === 'DELETE') {
                    console.log('Resource deleted successfully!'); // Or display user-friendly message
                }
            })
            .catch(error => console.error('API call error:', error));
    }

    return (
        <>
            <Form callAPI={callAPI} updateFormData={updateFormData} />
        </>
    );
}

export default App;
