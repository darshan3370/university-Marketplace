import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Component, useEffect } from "react";
import { NavLink } from "react-router-dom";

class RowData extends Component {
    deleteSchool = (e) => {
        e.preventDefault();
        var id = this.props.obj.id;
        axios.post('/api/delete/school/' + id).then((res) => {
            console.log(res.data);
            window.location.reload(false);
        });
    }

    render() {
        // const deleteSchool = (e) => {
        //     e.preventDefault();
        //     var id = this.props.obj.id;
        //     axios.post('/api/delete/school/' + id).then((res) => {
        //         console.log(res.data);
        //         if (res.data.status = true) {
        //         }
        //     })
        // }
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.school_name}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
                <td>
                    {this.props.obj.contact}
                </td>
                <td>
                    <NavLink to={"view/" + this.props.obj.id} className="btn">
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </NavLink>
                    <NavLink onClick={this.deleteSchool} className="btn">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </NavLink>

                    {/* <button>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        Edit
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        Delete
                    </button> */}
                </td>
            </tr >
        );
    }
}
export default RowData;
