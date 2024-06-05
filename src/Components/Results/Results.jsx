import './Results.scss'
const Results = (props) => {
    return (
        <section>
            <pre>
                {
                    props.data
                        ? JSON.stringify(props.data, undefined, 2)
                        : <p>...</p>
                }
            </pre>
        </section>);
}

export default Results;
