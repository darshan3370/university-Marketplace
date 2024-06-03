import { Link, useNavigate } from "react-router-dom";
import useravtar from "../../../images/useravtar.png";
import './Nav.css';

function Nav() {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="user-navbar">
            <div className="bs-dashboard">
                <h3 className="">Business Admin Dashboard</h3>
            </div>
            <div className="">
                <span> {(loggedUser !== null) ? (loggedUser.first_name + ' ' + loggedUser.second_name) : 'Your name!'} </span>
                <Link to="/bs-update-profile">
                    <img src={useravtar} alt="user icon" width="30" />
                </Link>
            </div>
        </div>
    );
}

export default Nav;
