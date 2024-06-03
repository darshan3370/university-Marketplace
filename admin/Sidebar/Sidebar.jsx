import "./Sidebar.css";
import { useNavigate, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faDashboard, faGlobe, faGraduationCap, faHome, faPeopleArrows, faPeopleGroup, faPowerOff } from '@fortawesome/free-solid-svg-icons'

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
                        <NavLink to="/admin-dashboard">
                            <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon>
                            &nbsp;&nbsp;Dashboard
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/admin-manage-school">
                            <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                            &nbsp;&nbsp;Manage School
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/admin-manage-students">
                            <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                            &nbsp;&nbsp;Manage Students
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/admin-manage-bs-owners">
                            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                            &nbsp;&nbsp;Manage Bs Owners
                        </NavLink>
                    </div>
                    <div className="sidebar-link">
                        <NavLink to="/admin-chat">
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
