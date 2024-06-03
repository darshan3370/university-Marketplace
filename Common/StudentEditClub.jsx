import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../student/Nav/Nav';
import Sidebar from '../student/Sidebar/Sidebar';

function StudentEditClub() {
    const { id } = useParams();

    const [clubName, setclubName] = useState("");
    const [clubDescription, setclubDescription] = useState("");
    const [productQuantity, setproductQuantity] = useState("");
    const [totalMembers, settotalMembers] = useState("");
    const [clubFile, setSelectedFile] = useState(null);
    const [selectedFileEvent, setSelectedFileEvent] = useState(true);

    useEffect(() => { getProduct(); }, [])
    const getProduct = async () => {
        await axios.get('/api/club/' + id)
            .then((res) => {
                const clubName = res.data.club_name;
                const productQuantity = res.data.product_quantity;
                const clubDescription = res.data.club_description;
                const totalMembers = res.data.club_total_members;
                const clubFile = res.data.club_picture;

                setclubName(clubName)
                setclubDescription(clubDescription)
                setproductQuantity(productQuantity)
                settotalMembers(totalMembers)
                setSelectedFile(clubFile)
            })
            .catch((error) => { });
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

    const updateClub = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("club_picture", clubFile);
        formData.append("club_desc", clubDescription);
        formData.append("proq", productQuantity);
        formData.append("clname", clubName);
        formData.append('totalMembers', totalMembers);

        try {
            const response = await axios.post("/api/club/" + id, formData).then((res) => {
                // console.log(res.data);
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
                                <h2>Edit Club</h2>
                            </div>
                            <div className="basicform">
                                <form onSubmit={updateClub}>
                                    <label>Club Name</label>
                                    <input type="text"
                                        className="fname"
                                        onChange={(event) => {
                                            setclubName(event.target.value);
                                        }}
                                        value={clubName} />
                                    <br />
                                    <br />
                                    <label>Club Description:</label>
                                    <input type="text" class="lname"
                                        onChange={(event) => {
                                            setclubDescription(event.target.value);
                                        }}
                                        value={clubDescription} />
                                    <br />
                                    <br />
                                    {/* <label>Club Created by:</label>
                                    <input type="text" class="lname" />
                                    <br />
                                    <br /> */}
                                    <label>Product Quantity</label>
                                    <input type="text" class="lname"
                                        onChange={(event) => {
                                            setproductQuantity(event.target.value);
                                        }}
                                        value={productQuantity} />
                                    <br />
                                    <br />
                                    <div className="upd-wrapper">
                                        <label>Club total member:</label>
                                        <input type="text" class="members"
                                            onChange={(event) => {
                                                settotalMembers(event.target.value);
                                            }}
                                            value={totalMembers} />
                                    </div>

                                    <br /><br />
                                    <div className="upd-wrapper">
                                        <button className="student-btn">Club photo</button>
                                        <input type="file" name="profilepic" onChange={handleFileSelect} />
                                    </div>
                                    <div>
                                        {
                                            selectedFileEvent === true ? <img src={ourImage(clubFile)} alt="" srcset="" height={70} /> : <img src={clubFile} alt="" srcset="" height={70} />
                                        }
                                    </div>

                                    <input type="submit" value="Add club" class="sbmt" />
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentEditClub
