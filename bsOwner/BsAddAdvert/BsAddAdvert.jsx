import "./BsAddAdvert.css";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
import { useState } from "react";
import axios from "axios";

function BsAddAdvert() {

    const [adName, setAdName] = useState(null);
    const [adDescription, setAdDescription] = useState(null);
    const [adPicture, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const postAd = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("ad_picture", adPicture);
        formData.append("ad_name", adName);
        formData.append("adDesc", adDescription);

        try {
            var response = await axios.post('api/advertisement', formData);
            // console.log(response.data);
            window.location.reload(false);
        } catch (error) {

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
                                <h2>Add Advertisement</h2>
                            </div>
                            <div className="basicform">
                                <form onSubmit={postAd}>
                                    <label>Advertisement Name</label>
                                    <input
                                        type="text"
                                        className="fname"
                                        onChange={(event) => {
                                            setAdName(event.target.value)
                                        }}
                                        value={adName}
                                        required
                                    />
                                    <br />
                                    <br />
                                    <label>Advertisement Description:</label>
                                    <input
                                        type="text"
                                        class="lname"
                                        onChange={(event) => {
                                            setAdDescription(event.target.value)
                                        }}
                                        value={adDescription}
                                        required
                                    />
                                    <br />
                                    <br />
                                    <div className="upd-wrapper">
                                        <label>Advertisement Picture:</label>
                                        <button className="student-btn">Upload Advertisement picture</button>
                                        <input
                                            type="file"
                                            name="profilepic"
                                            onChange={handleFileSelect}
                                            required
                                        />
                                    </div>

                                    <input type="submit" value="Advertisement upload" class="sbmt" />
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BsAddAdvert;
