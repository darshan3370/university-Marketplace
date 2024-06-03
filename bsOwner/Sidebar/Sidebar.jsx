import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faDashboard, faDotCircle, faGlobe, faHome, faPowerOff, faUsers } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

function Sidebar() {
    //define navigate to redirect to different pages
    const navigate = useNavigate();
    const logUserOut = async (e) => {
        e.preventDefault();
        localStorage.clear();
        const logOut = await axios.post('api/logout')
        if (logOut.data == '') {
            localStorage.setItem('isLoggedIn', false);
            navigate("/login");
        }
    }
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="sidebar-menu" id="sidemenubar">
                    <div className="sidebar-link active-menu-link">
                        <NavLink to="/home">
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                            &nbsp;&nbsp;Home
                        </NavLink>
                    </div>
                    <div className="sidebar-link active-menu-link">
                        <NavLink to="/bs-dashboard">
                            <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon>
                            &nbsp;&nbsp;Dashboard
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/bs-add-product">
                            <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                            &nbsp;&nbsp;Add Product
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/bs-view-product">
                            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                            &nbsp;&nbsp;View Product
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/bs-add-advert">
                            <FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon>
                            &nbsp;&nbsp;Add Advertisement
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/bs-view-advert">
                            <FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon>
                            &nbsp;&nbsp;View Advertisement
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/bs-chat-area">
                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                            &nbsp;&nbsp;Chat
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink onClick={logUserOut}>
                            <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
                            &nbsp;&nbsp;Log out
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
