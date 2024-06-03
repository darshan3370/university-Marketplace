import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../student/Nav/Nav';
import Sidebar from '../student/Sidebar/Sidebar';

function StudentEditAd() {
    const { id } = useParams();

    const [adName, setAdName] = useState('');
    const [adDescription, setAdDescription] = useState('');
    const [adPicture, setSelectedFile] = useState("");
    const [selectedFileEvent, setSelectedFileEvent] = useState(true);

    useEffect(() => { getProduct(); }, [])
    const getProduct = async () => {
        await axios.get('/api/advert/' + id)
            .then((res) => {
                const adName = res.data.advert.advertisement_name;
                const adDescription = res.data.advert.advertisement_description;
                const adPicture = res.data.advert.advertisement_picture;

                setAdName(adName)
                setAdDescription(adDescription)
                setSelectedFile(adPicture)
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

    const updateAd = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("advertisement_picture", adPicture);
        formData.append("advertisement_name", adName);
        formData.append("advertisement_description", adDescription);

        try {
            const response = await axios.post("/api/advert/" + id, formData).then((res) => {
                // console.log(res.data);
            }).catch((error) => {
            });
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
                                <h2>Edit Advertisement</h2>
                            </div>
                            <div className="basicform">
                                <form onSubmit={updateAd}>
                                    <label>Advertisement Name</label>
                                    <input
                                        type="text"
                                        className="fname"
                                        onChange={(event) => {
                                            setAdName(event.target.value)
                                        }}
                                        value={adName}
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
                                        />
                                    </div>
                                    <div>
                                        {
                                            selectedFileEvent === true ? <img src={ourImage(adPicture)} alt="" srcset="" height={70} /> : <img src={adPicture} alt="" srcset="" height={70} />
                                        }
                                    </div>

                                    <input type="submit" value="Advertisement upload" class="sbmt" />
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentEditAd
