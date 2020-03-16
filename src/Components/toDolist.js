import React, { useState } from 'react';


const List = props => {
    
    const [todolist, setToDoList] = useState([
        {title:"Task 1", content:"Get C# black belt", completed:false},
        {title:"Task 2", content:"Get Python black belt", completed:true},
        {title:"Task 3", content:"Get MERN black belt", completed:false},
        {title:"Task 4", content:"Get Web_Fun. Yellow belt", completed:true}
    ]);
    const unfinish = e => {
        let alter = [...todolist];
        alter[e.target.value].completed = false;        
        setToDoList(alter);
    }
    const finish = e => {
        let alter = [...todolist];
        alter[e.target.value].completed = true;        
        setToDoList(alter);
    }
    const deleteTask = e => {
        let tasky = [...todolist];
        tasky.splice(e.target.value, 1);
        setToDoList(tasky);
    }
    const [ formState, setFormState] = useState({
        title: "",
        content: ""
    })
    const onChangeHandler = e => {
        setFormState({
            ...formState, [e.target.name] : e.target.value
        });
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        let title = formState.title;
        let content = formState.content;
        let completed = false;
        let newBox = { title, content, completed };
        setToDoList([...todolist, newBox]);
    }

    return(
        <>
            
            <div className="container">
                <div className="jumbotron">
                    <h1> To Do list Template </h1>          
                </div>
                <form onSubmit={onSubmitHandler}>
                    <label>Task Name</label> {" "}
                    <input type="text" name="title" onChange={onChangeHandler}/>
                    <br/>
                    <label>Description</label> {" "}
                    <input type="text" name="content" onChange={onChangeHandler}/>
                    <br/>
                    <input type="submit" className="btn btn-primary"/>
                </form>
                <br/>
                <br/>
                {todolist.map((item, i) =>
                    <div style= {{ display:"inline-block", padding:"25px"}}>
                        {item.completed===true ? <p>{item.title}</p>:<p>{item.title}</p>}
                        {item.completed===true ? <p style={{textDecoration:"line-through"}}>{item.content}</p>:<p>{item.content}</p>}
                        {item.completed ? 
                            <button onClick={unfinish} value={i} className="btn btn-warning" style= {{margin:"5px"}}>Not Done</button>: 
                            <button onClick={finish} value={i} className="btn btn-success" style= {{margin:"5px"}}>Done</button>}
                            <button onClick={deleteTask} value={i} className="btn btn-danger">Delete</button>
                            <br/>
                            <br/>
                    </div>
                )}
            </div>
        </>
    )
}

export default List;
