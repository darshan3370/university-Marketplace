import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";


function SaUpdateProfile() {
    let loggedInUser = JSON.parse(localStorage.getItem('user'));
    var savedId = loggedInUser.id;
    let savedFirstName = localStorage.getItem('first_name');
    let savedSecondName = localStorage.getItem('second_name');

    const [email, setEmail] = useState("");
    const [secondName, setSecondName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [password, setPassword] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileEvent, setSelectedFileEvent] = useState(true);

    useEffect(() => {
        const getUserInfo = async () => {
            const response = await axios.get('/api/user/' + savedId).then(({ data }) => {
                console.log(data);
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

    const ourImage = (image) => {
        return '/uploads/' + image;
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
        formData.append('user_id', savedId);

        try {
            await axios.post("/api/user/" + savedId, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            }).then((res) => {
                console.log(res.data);
                window.location.reload(false);
            }).catch((error) => {
                console.log(error);
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
                            <div className="chartcontainer vertical flat">
                                <h2> School Admin Update Profile</h2>
                            </div>

                            <div className="basicform">
                                <form onSubmit={updateUser}>
                                    <label>First Name</label>
                                    <input type="text" className="fname"
                                        onChange={(event) => {
                                            setFirstName(event.target.value);
                                        }}
                                        value={firstName}
                                        required
                                    />
                                    <br />
                                    <br />
                                    <label>Last Name:</label>
                                    <input type="text" className="lname"
                                        onChange={(event) => {
                                            setSecondName(event.target.value);
                                        }}
                                        value={secondName}
                                        required
                                    />
                                    <br />
                                    <br />
                                    <label>Email:</label>
                                    <input type="email" className="email"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        value={email}
                                        required
                                    />
                                    <br />
                                    <br />
                                    <label>Password:</label>
                                    <input type="password" className="pass"
                                        onChange={e => {
                                            setPassword(e.target.value);
                                        }}
                                        value={password}
                                    />
                                    <br />
                                    <br />
                                    <label>Address:</label>
                                    <input type="text" className="Add"
                                        onChange={e => {
                                            setAddress(e.target.value);
                                        }}
                                        value={address}
                                        required
                                    />
                                    <br />
                                    <br />
                                    <label>Contact number:</label>
                                    <input type="number" className="no"
                                        onChange={e => {
                                            setContactNumber(e.target.value);
                                        }}
                                        value={contactNumber}
                                        required
                                    />
                                    <br />
                                    <br />
                                    <div className="upd-wrapper">
                                        <label>Profile Pic:</label>
                                        <button className="btn">Upload Profile picture</button>
                                        <input type="file" name="profilepic" onChange={handleFileSelect} />
                                    </div>
                                    <div>
                                        {
                                            selectedFileEvent === true ? <img src={ourImage(selectedFile)} alt="" srcset="" height={70} /> : <img src={selectedFile} alt="" srcset="" height={70} />
                                        }
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

export default SaUpdateProfile;
