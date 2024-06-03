import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useravtar from "../../../images/useravtar.png";
import './Nav.css';

function Nav() {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="user-navbar">
            <div className="student-user-dashboard">
                <h3 className="">Admin Dashboard</h3>
            </div>
            <div className="">
                <span> {loggedUser == null ? 'Update' : loggedUser.first_name + ' ' + loggedUser.second_name} </span>
                <Link to="/admin-update-profile">
                    <img src={useravtar} alt="user icon" width="30" />
                </Link>
            </div>
        </div>
    );
}

export default Nav;
