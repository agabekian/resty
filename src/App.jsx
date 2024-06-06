import {useReducer, useEffect} from 'react';
import ourReducer from './reducer.js';

import axios from 'axios';

import Form from './Components/Form/Form.jsx';
import Header from "./Components/Header/index.jsx";
import Footer from "./Components/Footer/index.jsx";

function App() {

    const initAPIState = {
        json: '',
        history: [],
        request: {
            method: '',
            url: '',
            body: null
        },
    }

    const [state, dispatch] = useReducer(ourReducer, initAPIState);

    function addHistory(e) {
        e.preventDefault();
        let action = {type: 'ADD_HISTORY', payload: state.history};
        dispatch(action);
    }

    function makeTheAPICall(url, method, body) {

        let parseBody = body ? JSON.parse(body) : null
        let action = {
            type: 'NEW_REQUEST',
            payload: {
                method,
                url,
                parseBody
            }
        }
        dispatch(action)
        console.log("button pressed, reducer works here")
    }

    async function fetch() {
        console.log("fetching....")
        let response = await axios(state.request); // STATE as arg

        let jsonString = response.data
            ? JSON.stringify(response.data, null, 2)
            : null;
        setJson(jsonString);
    }

    function setJson(string) {
        let action = {type: 'SET_JSON', payload: string};
        dispatch(action);
    }
    useEffect(() => {
        console.log("I am in the useEffect() hook");
    }, []);
    // Watch the request variable for changes
    useEffect(() => {
        console.log("looooo",state.request)
        if (state.request.method && state.request.url) { // Check only once
            console.log("fetching from the useEffect() hook"); // Log for verification
            fetch();
        }
    }, [state.request]);


    return (
        <>
            <Header/>
            <Form callAPI={makeTheAPICall}/>
            <pre data-testid="json-display">{state.json}</pre>
            <Footer/>
        </>
    )
}

export default App
