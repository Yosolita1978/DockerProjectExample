import './App.css';
import { BrowserRouter as Routers, Route, Link } from 'react-router-dom';
import YourComponent from './YourComponent';
import MainComponent from './MainComponent';
import { Fragment } from 'react';

function App() {
  return (
    <Routers>
      {/* //* Define the routes for your header / This links will be always present if they are in the header */}
      <Fragment>
      <header className='header'>
        <div>This is a multicontainer application template</div>
        <Link to="/">Home</Link>
        <Link to="/othercomponent">Other page</Link>
      </header>
      {/* Create the routes for those links that you put in the header */}
      <Route exact path="/" component={MainComponent}/>
      <Route path="/othercomponent" component={YourComponent}/>
      </Fragment>
    </Routers>
    
  );
}

export default App;
