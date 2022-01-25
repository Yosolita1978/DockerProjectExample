import { Link } from 'react-router-dom';

const YourComponent = () => {
    // This is just another component that you probably will use
    return (
    <div>
        I'm another page| component
        <br />
        <br />

        <Link to="/">Go back to home</Link>

    </div>
    );
};

export default YourComponent;