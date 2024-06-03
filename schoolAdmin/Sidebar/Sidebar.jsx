import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faDashboard, faDotCircle, faGlobe, faHome, faMessage, faPowerOff, faUsers } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    //define navigate to redirect to different pages
    const navigate = useNavigate();
    const logUserOut = async (e) => {
        e.preventDefault();
        localStorage.clear();
        const logOut = await axios.post('api/logout')
        if (logOut.data == '') {
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
                        <NavLink to="/sa-dashboard">
                            <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon>
                            &nbsp;&nbsp;Dashboard
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/sa-manage-students">
                            <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                            &nbsp;&nbsp;Manage Students
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/sa-manage-bs-owner">
                            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                            &nbsp;&nbsp;Manage Bs Owners
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/sa-view-clubs">
                            <FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon>
                            &nbsp;&nbsp;View Club
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/sa-view-post">
                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                            &nbsp;&nbsp;View Post
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/sa-chat">
                            <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
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
