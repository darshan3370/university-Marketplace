import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Nav from '../admin/Nav/Nav';
import Sidebar from '../admin/Sidebar/Sidebar';

function AdminViewSchool() {
    var { id } = useParams();

    const [schoolName, setSchoolName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');

    useEffect(() => {
        getSchool();
    }, []);

    const getSchool = async () => {
        await axios.get('/api/school/' + id).then((res) => {
            const schoolName = res.data.school.school_name;
            const address = res.data.school.address;
            const contact = res.data.school.contact;

            setSchoolName(schoolName)
            setAddress(address)
            setContact(contact)

        }).catch((error) => { });
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
                                <h2>Business Owner Details</h2>
                            </div>
                            <div className='row justify-between align-content-center'>
                                <div className='col-4'>
                                    <h2>School Name</h2>
                                    <p>{schoolName}</p>
                                </div>
                                <div className='col-4'>
                                    <h2>Address</h2>
                                    <p>{address}</p>
                                </div>
                                <div className='col-4'>
                                    <h2>Contact</h2>
                                    <p>{contact}</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminViewSchool
