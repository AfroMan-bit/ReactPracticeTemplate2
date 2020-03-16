import React from 'react';

// / after typing "npm i bootstrap" to install bootstarp to our project in the same folder as the node_modules and listed in my package.json, we can see it inside there by typing "cat package.json" after installation in the git bash terminal, we import bootstarp here with this code below
import 'bootstrap/dist/css/bootstrap.min.css';

// after setting up the reach router we need to be able to link to other pages and <link> component just changes the url and the DOM and also implement a navigation bar. we import link here with the code below
import { Link } from '@reach/router';

// if we wanted to redirect to another page in the project. This can be done with "navigate". After performing some action, we can run a method such as navigate('/success'), and this will programmatically redirect the user to that front end route. we can import navigate here with this code below
import { navigate } from '@reach/router';


const PageTwo = props => {


    // this below adds the function for the "onClickHandler" for the button "Navigate" 
    const onClickHandler = e => {
        e.preventDefault();
        navigate('/');
    }

    return(
        <>
            <div className="container">
                <div className="jumbotron">
                    <h1> Page Two Template </h1>
                </div>
                <br/>
                <br/>
                {/* the <Link> component below will not refresh the page. It will simply change the url and change the DOM. */}
                <Link to="/"> Go Back to Page One </Link>
                <br/>
                <br/>
                {/* "navigate can be added below with a button after we import it into this page like the code above" */}
                <button onClick={onClickHandler} className="btn btn-dark"> Navigate </button>
                
            </div>
        </>
    )
}

export default PageTwo;