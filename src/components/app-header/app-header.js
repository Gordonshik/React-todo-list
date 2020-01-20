import React from "react";
import "./app-header.css"

const AppHeader = ({toDo, done}) => {

    return (
        <div className = "header">

            <div className="app-header d-flex text-center">
                <h1>My Todo List</h1>
                <h2>{toDo} more to do, {done} done</h2>
            </div>

        </div>


    )
}

export default AppHeader;