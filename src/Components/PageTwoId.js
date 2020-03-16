import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, navigate } from '@reach/router';



const PageTwodetails = props => {

    // this below adds the function for the "onClickHandler" for the button "Navigate" 
    const onClickHandler = e => {
        e.preventDefault();
        navigate('/route-two');
    }

    return(

        <>
            <div className="container">
                <div className="jumbotron">
                    <h1> Page Two Details Template </h1>          
                </div>
                <br/>
                <br/>
                <p> This is the Details Template of Page One with id = {props.id}</p>
                {/* "navigate can be added below with a button after we import it into this page like the code above" */}
                <button onClick={onClickHandler} className="btn btn-dark"> Navigate To Page Two </button>
                <br/>
                <br/>
                <Link to="/route-two"> Go Back to Page Two </Link>

            </div>
        </>

    )
}

export default PageTwodetails;