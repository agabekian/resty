import {useReducer, useEffect} from 'react';
import _Reducer from './reducer.js';

import axios from 'axios';
import History from './Components/History/History.jsx';
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

    const [state, dispatch] = useReducer(_Reducer, initAPIState);

    function setJson(string) {
        let action = {type: 'SET_JSON', payload: string};
        dispatch(action);
    }

    function addHistory(obj) {
        let action = {type: 'ADD_HISTORY', payload: obj};
        dispatch(action);
    }

    function makeTheAPICall(url, method, body) {

        let parseBody = body ? JSON.parse(body) : null
        // console.log("PARSED", parseBody)

        let action = {
            type: 'NEW_REQUEST',
            payload: {
                method,
                url,
                data: parseBody      //axios expects DATA not BODY --- damn that was painful
            }
        }
        dispatch(action)
    }

    useEffect(() => {
        state.request.method && state.request.url && fetch();// Check only once

    }, [state.request]);

    async function fetch() {
        console.log("BODY", state.request.body); //sends ok
        let response = await axios(state.request); // STATE as arg

        let jsonString = response.data
            ? JSON.stringify(response.data, null, 2)
            : null;
        setJson(jsonString);
        addHistory(jsonString);
    }

    return (
        <>
            <Header/>
            <Form callAPI={makeTheAPICall}/>
            <pre data-testid="json-display">{state.json}</pre>
            <History history={state.history}/>
            <Footer/>
        </>
    )
}

export default App
