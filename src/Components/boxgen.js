import React, { useState } from 'react';


const Boxgenerator = props => {
    const [ boxes, setBoxes] = useState([])
    const [ formState, setFormState ] = useState({
        color: "",
        height: "",
        width: ""
    })

    const onChangeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        let color = formState.color;
        let height = formState.height + "px";
        let width = formState.width + "px";
        let boxAdd = { color, height, width };
        setBoxes([...boxes, boxAdd]);
        console.log(formState);

    }

    return(
        <>
            <div className="container">
                <div className="jumbotron">
                    <h1> Box Generator Template </h1>          
                </div>
                <div className= "col-sm-06">        
                    <form onSubmit= {onSubmitHandler}>
                        <label>Color</label>{" "}               
                        <input type= "text" name= "color" onChange={onChangeHandler}/>
                        <br></br>
                        <label>Height</label>{" "}               
                        <input type= "text" name= "height" onChange={onChangeHandler}/>
                        <br></br>
                        <label>Width</label>{" "}               
                        <input type= "text" name= "width" onChange={onChangeHandler}/>
                        <br></br>
                        <br></br>
                        <input type= "submit" value= "Add"/>
                        <br></br>
                        <br></br>
                    </form>
                    {/* this code below has a default CSS styling for height, width, margin and background color in the "App.css" file */}
                    {boxes.map(( items, i) =>
                    <div key= {i} style={{ backgroundColor:items.color, height:items.height, width:items.width, display:"inline-block", margin:"20px"}}>
                    </div>
                    )}
                </div>  
            </div>              
        </>
    )
}

export default Boxgenerator;
