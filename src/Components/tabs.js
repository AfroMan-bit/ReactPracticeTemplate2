import React, { useState } from 'react';


const TabInfo = props => {
    
    const [ displayTabInfo, setdisplayTabInfo ] = useState({});

    const [ display, setDisplay ] = useState(false);

    const tabs = [
        {title:"Tab 1", content:"Tab 1 contents is here"},
        {title:"Tab 2", content:"Tab 2 contents is here"},
        {title:"Tab 3", content:"Tab 3 contents is here"}
    ];

    const onClickHandler = e => {
        console.log(e.target.value);
        setdisplayTabInfo(tabs[e.target.value]);
        setDisplay(true);
        console.log(displayTabInfo);
    }

    return(
        <>

            
            <div className="container">
                <div className="jumbotron">
                    <h1> Tabs Template </h1>          
                </div>
                <button type="button" className="btn btn-primary" onClick={onClickHandler} value="0">Tab 1</button> {" "}
                <button type="button" className="btn btn-secondary" onClick={onClickHandler} value="1">Tab 2</button> {" "}
                <button type="button" className="btn btn-success" onClick={onClickHandler} value="2">Tab 3</button>
                <br/>
                <br/>
                <br/>
                {display===true ? <div><h3>{displayTabInfo.title}</h3><h5>{displayTabInfo.content}</h5></div> : true}
            </div>
        </>
    )
}

export default TabInfo;
