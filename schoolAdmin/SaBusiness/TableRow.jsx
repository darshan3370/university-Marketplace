import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TableRow extends Component {
    deleteBusinessOwner = async () => {
        await axios.delete('/api/business/' + this.props.obj.id).then((res) => {
            console.log(res.data);
            window.location.reload(false);
        }).catch((error) => { });
    }
    render() {
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
                    <NavLink to={'view/' + this.props.obj.id} className="btn">
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </NavLink>
                    <NavLink onClick={this.deleteBusinessOwner} className="btn">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </NavLink>
                </td>
            </tr>
        );
    }
}

export default TableRow;
