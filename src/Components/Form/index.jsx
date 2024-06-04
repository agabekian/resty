import './Form.scss';
import {useState} from "react";

const Form = (props) => {
    const [verb, setVerb] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setVerb(e.target.value);
        const formData = {
            method: verb,
            url: 'https://swapi.dev/api/people',
        };
        props.handleApiCall(formData);
    }
    const handleButtonClick = (e) => setVerb(e.target.id);

    return (
        <form onSubmit={handleSubmit}>
            <label className="formLabel">
                <span>URL: </span>
                <input name='url' type='text'/>
                <button type="submit">GO!</button>
            </label>
            <label className="methods">
                <span id="get" onClick={handleButtonClick}>GET</span>
                <span id="post" onClick={handleButtonClick}>POST</span>
                <span id="put" onClick={handleButtonClick}>PUT</span>
                <span id="delete" onClick={handleButtonClick}>DELETE</span>
            </label>
        </form>
    );
}

export default Form;
