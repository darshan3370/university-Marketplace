import { useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import "./BsAddProduct.css";

function BsAddProduct() {
    var savedId = localStorage.getItem('id');
    let savedFirstName = localStorage.getItem('first_name');
    let savedSecondName = localStorage.getItem('second_name');

    const [productName, setProductName] = useState("");
    const [productCategory, setOptions] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);


    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const addProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("product_picture", selectedFile);
        formData.append("product_name", productName);
        formData.append("category_id", productCategory);
        formData.append("product_description", productDescription);
        formData.append("product_price", productPrice);
        formData.append("product_quantity", productQuantity);
        // formData.append('user_id', savedId);

        try {
            const response = await axios.post("/api/product", formData).then((res) => {
                // console.log(res.data);
                window.location.reload(false);
            }).catch((error) => {
                // console.log(error.request);
            });
        } catch (error) {
            // console.log(error)
        }
    }
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
                                <h2>Add Product</h2>
                            </div>
                            <div className="basicform">
                                <form onSubmit={addProduct}>
                                    <label>Product Name</label>
                                    <input type="text" className="fname"
                                        onChange={(event) => {
                                            setProductName(event.target.value);
                                        }}
                                        value={productName}
                                    />
                                    <br />
                                    <br />
                                    <label>Product Category</label>
                                    <select
                                        id="category"
                                        name="cars"
                                        defaultValue={productCategory}
                                        onChange={(e) => setOptions(e.target.value)}
                                    >
                                        <option value="0">Select Category</option>
                                        <option value="1">Drink</option>
                                        <option value="2">Grocery</option>
                                        <option value="3">Furn</option>
                                        <option value="4">Coffee</option>
                                    </select>
                                    <br />
                                    <br />
                                    <div className="upd-wrapper">
                                        <label>Product Description:</label>
                                        <input type="text" class="lname"
                                            onChange={(event) => {
                                                setProductDescription(event.target.value)
                                            }}
                                            value={productDescription}
                                        />
                                    </div>
                                    <br />
                                    <br />
                                    <div className="upd-wrapper">
                                        <label>Product Price:</label>
                                        <input type="text" class="lname"
                                            onChange={(event) => {
                                                setProductPrice(event.target.value)
                                            }}
                                            value={productPrice}
                                        />
                                    </div>
                                    <br />
                                    <br />
                                    <label>Product Quantity</label>
                                    <input type="text" class="lname"
                                        onChange={(event) => {
                                            setProductQuantity(event.target.value)
                                        }}
                                        value={productQuantity}
                                    />
                                    <br />
                                    <br />
                                    <div className="upd-wrapper">
                                        <label>Product Picture:</label>
                                        <button className="student-btn">Upload Product picture</button>
                                        <input type="file" onChange={handleFileSelect} />
                                    </div>

                                    <input type="submit" value="Submit" class="sbmt" />
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BsAddProduct;
