import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">👇🏻 Click!</div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/main">Main</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/hello">To-do-list</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/board/list">Dashboard</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/portfolio">Contact ME</Link>
            </div>
        </div>
    );
};

export default Sidebar;