import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class DataRow extends Component {

    render() {
        const deleteUser = async (event) => {
            event.preventDefault();
            const response = await axios.delete('/api/user/' + this.props.obj.id)
            console.log(response.data);

            window.location.reload(false);
        };
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.first_name}
                </td>
                <td>
                    {this.props.obj.second_name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
                <td>
                    {this.props.obj.contact_number}
                </td>
                <td>
                    <NavLink to={'edit/' + this.props.obj.id} className="btn">
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </NavLink>
                    <NavLink onClick={deleteUser} className="btn">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </NavLink>
                </td >
            </tr >
        );
    }
}

export default DataRow;
