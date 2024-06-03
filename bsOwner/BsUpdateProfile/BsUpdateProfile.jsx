import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";


function BsUpdateProfile() {
    var savedId = JSON.parse(localStorage.getItem('user'));
    let savedFirstName = localStorage.getItem('first_name');
    let savedSecondName = localStorage.getItem('second_name');

    const [email, setEmail] = useState("");
    const [secondName, setSecondName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [password, setPassword] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const getUserInfo = async () => {
            const response = await axios.get('/api/user/' + savedId.id).then(({ data }) => {
                const email = data.user.email;
                const secondName = data.user.second_name;
                const firstName = data.user.first_name;
                const address = data.user.address;
                const contactNumber = data.user.contact_number;
                const selectedFile = data.user.profile_picture;

                setEmail(email);
                setSecondName(secondName)
                setFirstName(firstName)
                setAddress(address)
                setContactNumber(contactNumber)
                setSelectedFile(selectedFile)

            })
        };
        getUserInfo();
    }, []);


    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const updateUser = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("profile_picture", selectedFile);
        formData.append("email", email);
        formData.append("first_name", firstName);
        formData.append("second_name", secondName);
        formData.append("address", address);
        formData.append("contact_number", contactNumber);
        formData.append("password", password);
        formData.append('user_id', savedId.id);

        try {
            const response = await axios.post("/api/user/" + savedId.id, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            }).then((res) => {
                if (res.status == 200) {
                    console.log(res.data);
                    if (typeof Storage !== 'undefined') {
                        localStorage.setItem('user', JSON.stringify(res.data.user));
                    }
                    // window.location.reload(false);
                }
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
                        <main>
                            <div
                                className="chartcontainer vertical flat"

                            >
                                <h2>Business owner Update Profile</h2>
                            </div>

                            <div className="basicform">
                                <form onSubmit={updateUser}>
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        className="fname"
                                        onChange={(event) => {
                                            setFirstName(event.target.value);
                                        }}
                                        value={firstName}
                                    />
                                    <br />
                                    <br />
                                    <label>Last Name:</label>
                                    <input
                                        type="text"
                                        className="lname"
                                        onChange={(event) => {
                                            setSecondName(event.target.value);
                                        }}
                                        value={secondName}
                                    />
                                    <br />
                                    <br />
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        className="email"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        value={email}
                                    />
                                    <br />
                                    <br />
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        className="pass"
                                        onChange={e => {
                                            setPassword(e.target.value);
                                        }}
                                        value={password}
                                    />
                                    <br />
                                    <br />
                                    <label>Address:</label>
                                    <input
                                        type="text"
                                        className="Add"
                                        onChange={e => {
                                            setAddress(e.target.value);
                                        }}
                                        value={address} />
                                    <br />
                                    <br />
                                    <label>Contact number:</label>
                                    <input
                                        type="text"
                                        className="no"
                                        onChange={e => {
                                            setContactNumber(e.target.value);
                                        }}
                                        value={contactNumber}
                                    />
                                    <br />
                                    <br />
                                    <div className="upd-wrapper">
                                        <label>Profile Pic:</label>
                                        <button className="btn" id="user-profile">Upload Profile picture</button>
                                        <input type="file" onChange={handleFileSelect} />
                                    </div>

                                    <input type="submit" value="SUBMIT" class="sbmt" />
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BsUpdateProfile;
