import axios from "axios";
import { Component, useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";

function AddSchool() {
    const [sname, seSname] = useState(null);
    const [saddress, seSaddress] = useState(null);
    const [scontact, seScontact] = useState(null);
    const addSchool = async (e) => {
        e.preventDefault();
        let formData = {
            sname: sname,
            address: saddress,
            contact: scontact
        };

        try {
            const response = await axios.post("/api/add/school/", formData).then((res) => {
                // console.log(res.data);
                window.location.reload(false);
            }).catch((error) => {
                console.log(error.response.data);
            });
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div className="student-profile">
            <Sidebar />
            <div className="student-profile-contents">
                <Nav />
                <div>
                    <div className="student-profile-dashboard">
                        <main>
                            <div className="chartcontainer vertical flat">
                                <h2> Admin Add School</h2>
                            </div>

                            <div className="basicform">
                                <form onSubmit={addSchool}>
                                    <label>School Name</label>
                                    <input type="text" className="fname"
                                        onChange={(event) => {
                                            seSname(event.target.value);
                                        }}
                                        value={sname}
                                    />
                                    <br />
                                    <br />
                                    <label>Address:</label>
                                    <input type="text" className="lname"
                                        onChange={(event) => {
                                            seSaddress(event.target.value);
                                        }}
                                        value={saddress}
                                    />
                                    <br />
                                    <br />
                                    <label>Contact:</label>
                                    <input type="number" className="email"
                                        onChange={(e) => {
                                            seScontact(e.target.value);
                                        }}
                                        value={scontact}
                                    />

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
export default AddSchool;
