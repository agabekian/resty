// import { useState, useEffect } from 'react';
// import axios from 'axios';
//
// import Form from './Components/Form/Form.jsx';
// import Results from "./Components/Results/index.jsx";
// import Header from "./Components/Header/index.jsx";
// import Footer from "./Components/Footer/index.jsx"; // Import Axios
//
// function App() {
//     const [json, setJSON] = useState({}); // State to store API response data (JSON)
//
//     // Environment variable for API endpoint
//     const apiUrl = process.env.REACT_APP_API_URL;
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(apiUrl); // Assuming a GET request for initial data
//                 setJSON(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//
//         fetchData();
//     }, []); // Empty dependency array: fetch data only once on mount
//
//     function updateFormData(data) {
//         // Update state or perform actions based on form data (potentially triggering API calls)
//         console.log('Form data:', data);
//     }
//
//     function callAPI(url, method, body) { // Optional: Define for custom API calls
//         console.log('Making API call ...', url, method, body);
//
//         axios({
//             method: method,
//             url: url,  // Can be a relative URL or constructed with apiUrl
//             headers: {'Content-Type': 'application/json'},
//             data: body || {},
//         })
//             .then(response => {
//                 setJSON(response.data); // Update state with response data
//                 updateFormData(response.data); // Optional: Pass data to updateFormData
//             })
//             .catch(error => console.error('API call error:', error));
//     }
//
//     return (
//         <>
//             <Header/>
//             <Form callAPI={callAPI} updateFormData={updateFormData}/>
//             <Results data={json}/> {/* Pass updated json state as prop */}
//             <Footer/>
//         </>
//     );
// }
//
// export default App;
