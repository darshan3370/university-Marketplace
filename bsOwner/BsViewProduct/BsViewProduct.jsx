import "./BsViewProduct.css";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
import { Component } from "react";
import TableRow from "./TableRow";

class BsViewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', items: '' };
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/product')
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
                return <TableRow obj={object} key={i} />;
            })
        }
    }

    render() {
        return (
            <div className="student-profile">
                <Sidebar />
                <div className="student-profile-contents">
                    <Nav />
                    <main className="main">
                        <h2>View Product Details</h2>
                        <table className="" id="dttable">
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>Product Name</th>
                                    <th>Product Description</th>
                                    <th>Product Catogory</th>
                                    <th>Product Price</th>
                                    <th>Product Quantity</th>
                                    <th>Product Picture</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.tabRow()}
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        );
    }
}
export default BsViewProduct;
