import { faEdit, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TableRow extends Component {
    deleteAdvert = async () => {
        const response = await axios.delete('/api/advert/' + this.props.obj.id).then((response) => {
            console.log(response.data);
            window.location.reload(false);
        }).catch((error) => {
            //
        });
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.advertisement_name}
                </td>
                <td>
                    {this.props.obj.advertisement_description}
                </td>
                <td>
                    <img src={'/uploads/' + this.props.obj.advertisement_picture} alt={this.props.obj.product_picture} srcset="" height={50} />
                </td>
                <td>
                    <NavLink to={"ad-edit/" + this.props.obj.id} className="btn">
                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    </NavLink>
                    <NavLink className="btn" onClick={this.deleteAdvert}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </NavLink>
                </td>
            </tr>
        );
    }
}

export default TableRow;
