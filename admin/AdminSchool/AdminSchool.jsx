import "./AdminSchool.css";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEdit, faPowerOff, faTrash } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import { Component } from "react";
import RowData from "./RowData";

class AdminSchool extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', items: '' };
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/schools')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map(function (object, i) {
                return <RowData obj={object} key={i} />;
            })
        }
    }
    render() {
        return (
            <div className="student-profile">
                <Sidebar />
                <div className="student-profile-contents">
                    <Nav />
                    <div>
                        <div className="student-profile-dashboard">
                            <main className="main">
                                <div
                                    className="chartcontainer">
                                    <h2>Manage Schools</h2>
                                    <NavLink to="/admin-add-school">
                                        <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                                        &nbsp;&nbsp;Add School
                                    </NavLink>
                                </div>
                                <div>
                                    <table id="dttable">
                                        <thead>
                                            <tr>
                                                <th>Sr No</th>
                                                <th>School Name</th>
                                                <th>Address</th>
                                                <th>Contact</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.tabRow()}
                                        </tbody>
                                    </table>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminSchool;
