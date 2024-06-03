import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../schoolAdmin/Nav/Nav';
import Sidebar from '../schoolAdmin/Sidebar/Sidebar';

function SaEditStudents() {
    const { id } = useParams();

    const [firstName, setFirstName] = useState("");
    const [address, setAddress] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [profilePicture, setSelectedFile] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [selectedFileEvent, setSelectedFileEvent] = useState(true);

    useEffect(() => { getUser(); }, [])
    const getUser = async () => {
        await axios.get('/api/user/' + id)
            .then((res) => {
                console.log(res.data);
                const firstName = res.data.user.first_name;
                const secondName = res.data.user.second_name;
                const address = res.data.user.address;
                const email = res.data.user.email;
                const profilePicture = res.data.user.profile_picture;
                const contactNumber = res.data.user.contact_number;

                setFirstName(firstName)
                setAddress(address)
                setSecondName(secondName)
                setEmail(email)
                setSelectedFile(profilePicture)
                setContactNumber(contactNumber)
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

    const updateUser = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", setEmail);
        formData.append("first_name", firstName);
        formData.append("second_name", secondName);
        formData.append("address", setAddress);
        formData.append("contact_number", setContactNumber);
        formData.append('profile_picture', setSelectedFile);

        try {
            const response = await axios.put("/api/user/" + id, formData).then((res) => {
                console.log(res.data);
                // window.location.reload(false);
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
                                <h2>Edit Student</h2>
                            </div>
                            <div className="basicform">
                                <form onSubmit={updateUser}>
                                    <label>First Name</label>
                                    <input type="text"
                                        className="fname"
                                        onChange={(event) => {
                                            setFirstName(event.target.value);
                                        }}
                                        value={firstName} />
                                    <br />
                                    <br />
                                    <label>Second Name:</label>
                                    <input type="text" class="lname"
                                        onChange={(event) => {
                                            setSecondName(event.target.value);
                                        }}
                                        value={secondName} />
                                    <br />
                                    <br />
                                    <label>Address:</label>
                                    <input type="text" class="lname"
                                        onChange={(event) => {
                                            setAddress(event.target.value);
                                        }}
                                        value={address} />
                                    <br />
                                    <br />
                                    <label>Email:</label>
                                    <input type="text" class="lname"
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                        value={email} />
                                    <br />
                                    <br />
                                    <div className="upd-wrapper">
                                        <label>Contact number:</label>
                                        <input type="text" class="members"
                                            onChange={(event) => {
                                                setContactNumber(event.target.value);
                                            }}
                                            value={contactNumber} />
                                    </div>

                                    <br /><br />
                                    <div className="upd-wrapper">
                                        <button className="student-btn">Profile photo</button>
                                        <input type="file" name="profilepic" onChange={handleFileSelect} />
                                    </div>
                                    <div>
                                        {
                                            selectedFileEvent === true ? <img src={ourImage(profilePicture)} alt="" srcset="" height={70} /> : <img src={profilePicture} alt="" srcset="" height={70} />
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

export default SaEditStudents
