

// Form.js
import { useState } from 'react';

function Form(props) {
    const [formData, setFormData] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        props.callAPI(formData.url, formData.method, formData.body);
    }

    function handleChange(e) {
        const fieldName = e.target.name;
        const value = e.target.value;

        setFormData({ ...formData, [fieldName]: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Method: {formData.method} URL: {formData.url}</h3>
            <div>
                <span>URL: </span>
                <input onChange={handleChange} type="text" name="url" />
            </div>
            <div>
                <label>
                    <input onChange={handleChange} type="radio" name="method" value="get" />
                    <span>GET</span>
                </label>
                <label>
                    <input onChange={handleChange} type="radio" name="method" value="post" />
                    <span>POST</span>
                </label>
                <label>
                    <input onChange={handleChange} type="radio" name="method" value="put" />
                    <span>PUT</span>
                </label>
                <label>
                    <input onChange={handleChange} type="radio" name="method" value="delete" />
                    <span>DELETE</span>
                </label>
            </div>
            <div>
                <div>JSON BODY FOR POST/PUT:</div>
                <textarea onChange={handleChange} name="body" />
            </div>
            <div>
                <button type="submit">Make API Call</button>
            </div>
        </form>
    );
}

export default Form;
