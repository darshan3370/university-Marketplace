import { faEdit, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TableRow extends Component {
    deleteProduct = async () => {
        const response = await axios.delete('/api/product/' + this.props.obj.id);
        console.log(response.data);
        window.location.reload(false);
    };
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.product_name}
                </td>
                <td>
                    {this.props.obj.product_description}
                </td>
                <td>
                    {this.props.obj.category.category_name}
                </td>
                <td>
                    {this.props.obj.product_price}
                </td>
                <td>
                    {this.props.obj.product_quantity}
                </td>
                <td>
                    <img src={'/uploads/' + this.props.obj.product_picture} alt={this.props.obj.product_picture} srcset="" height={50} />
                </td>
                <td>
                    <NavLink to={"edit/" + this.props.obj.id} className="btn">
                        <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                    </NavLink>
                    <NavLink onClick={this.deleteProduct} className={'btn'}>
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

export default TableRow;
