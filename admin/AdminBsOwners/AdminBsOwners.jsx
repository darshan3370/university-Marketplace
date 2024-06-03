import "./AdminBsOwners.css";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
import { Component } from "react";
import DataRow from "./DataRow";

class AdminBsOwners extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', items: '' };
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/business')
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
                return <DataRow obj={object} key={i} />;
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
                                    className="chartcontainer"
                                >
                                    <h2>Manage Business Owners</h2>
                                </div>
                                <div>
                                    <table id="dttable">
                                        <thead>
                                            <tr>
                                                <th>Sr No</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                {/* <th>Business Name</th> */}
                                                <th>Email</th>
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

export default AdminBsOwners;
