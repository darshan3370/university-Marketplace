import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../student/Nav/Nav';
import Sidebar from '../student/Sidebar/Sidebar';

function EditProduct() {
    const { id } = useParams();

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileEvent, setSelectedFileEvent] = useState(true);
    const [productCategory, setOptions] = useState("");

    const options = [
        { value: '', text: '--Choose catrgory--' },
        { value: '1', text: 'Drink' },
        { value: '2', text: 'Grocery' },
        { value: '3', text: 'Furn' },
        { value: '4', text: 'Coffee' },
    ];
    const handleChanges = event => {
        setOptions(event.target.value);
    };

    useEffect(() => { getProduct(); }, [])
    const getProduct = async () => {
        await axios.get('/api/product/' + id)
            .then(({ data }) => {
                const productName = data.product.product_name;
                const productDescription = data.product.product_description;
                const productPrice = data.product.product_price;
                const productQuantity = data.product.product_quantity;
                const productCategory = data.product.category_id;
                const selectedFile = data.product.product_picture;

                setProductName(productName)
                setProductDescription(productDescription)
                setProductPrice(productPrice)
                setOptions(productCategory)
                setProductQuantity(productQuantity)
                setSelectedFile(selectedFile)
            })
            .catch(({ response: { data } }) => { });
    }

    const ourImage = (image) => {
        return '/uploads/' + image;
    }

    const handleFileSelect = (e) => {
        let file = e.target.files[0];
        let limit = 1024 * 1024 * 2;
        if (file['size'] > limit) {
            alert('Ooops! an error occured');
        } else {
            let fileReader = new FileReader();
            fileReader.onload = function (e) {
                setSelectedFileEvent(false);
                setSelectedFile(file);
            };
            fileReader.onerror = function () {
                alert(fileReader.error);
            };
            fileReader.readAsDataURL(file);
        }
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("product_picture", selectedFile);
        formData.append("product_name", productName);
        formData.append("category_id", productCategory);
        formData.append("product_description", productDescription);
        formData.append("product_price", productPrice);
        formData.append("product_quantity", productQuantity);

        try {
            const response = await axios.post("/api/product/" + id, formData).then((res) => {
                console.log(res.data);
            }).catch((error) => {
                console.log(error.request);
            });
        } catch (error) {
            console.log(error)
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
                                <h2>Edit Product</h2>
                            </div>
                            <div className="basicform">
                                <form onSubmit={updateProduct}>
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
                                    <select id='category'
                                        value={productCategory} onChange={handleChanges}>
                                        {options.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
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
                                    <div>
                                        {
                                            selectedFileEvent === true ? <img src={ourImage(selectedFile)} alt="" srcset="" height={70} /> : <img src={selectedFile} alt="" srcset="" height={70} />
                                        }
                                    </div>

                                    <input type="submit" value="Submit" class="sbmt" />
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct
