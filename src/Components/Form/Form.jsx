import ('./Form.scss');
import {useState} from 'react';

function Form(props) {
    const [formData, setFormData] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        props.callAPI(formData.url, formData.method, formData.body);
    }

    function handleChange(e) {
        const fieldName = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [fieldName]: value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <p data-testid="method">Method: {formData.method}</p>
            <p data-testid="url"> URL: {formData.url}</p>
            <div className="form-top">
                <input
                    data-testid="url-input"
                    onChange={handleChange}
                    type="text"
                    placeholder={formData.url}
                    name="url"/>
                <button data-testid="fetch-api-button" type="submit">GO !</button>
                {
                    formData.method === 'post' || formData.method === 'put'
                        ? <textarea
                            placeholder="JSON body"
                            onChange={handleChange}
                            name="body"
                        />
                        : <></>
                }
            </div>
            <div className="methods">
                <label>
                    <input onChange={handleChange}
                           data-testid="get-input"
                           type="radio" name="method"
                           value="get"/>
                    <span>GET</span>
                </label>
                <label>
                    <input onChange={handleChange}
                           data-testid="post-input"
                           type="radio" name="method"
                           value="post"/>
                    <span>POST</span>
                </label>
                <label>
                    <input onChange={handleChange} type="radio"
                           data-testid="put-input"
                           name="method"
                           value="put"/>
                    <span>PUT</span>
                </label>
                <label>
                    <input onChange={handleChange} type="radio"
                           data-testid="delete-input"
                           name="method"
                           value="delete"/>
                    <span>DELETE</span>
                </label>
            </div>
        </form>
    );
}

export default Form;
