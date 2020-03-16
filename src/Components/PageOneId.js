import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, navigate } from '@reach/router';

const PageOnedetails = props => {

    // this below adds the function for the "onClickHandler" for the button "Navigate" 
    const onClickHandler = e => {
        e.preventDefault();
        navigate('/');
    }

    return(

        <>
            <div className="container">
                <div className="jumbotron">
                    <h1> Page One Details Template </h1>          
                </div>
                <br/>
                <br/>
                <p> This is the Details Template of Page One with id = {props.id}</p>
                {/* "navigate can be added below with a button after we import it into this page like the code above" */}
                <button onClick={onClickHandler} className="btn btn-dark"> Navigate To Page One </button>
                <br/>
                <br/>
                <Link to="/"> Go Back to Page One </Link>

            </div>
        </>
        
        
    )
}

export default PageOnedetails;