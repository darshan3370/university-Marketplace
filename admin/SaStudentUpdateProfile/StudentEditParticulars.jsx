import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';

function StudentEditParticulars() {
    var { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [secondName, setSecondName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        await axios.get('/api/business/' + id).then((res) => {
            const firstName = res.data.user.first_name;
            const email = res.data.user.email;
            const secondName = res.data.user.second_name;
            const address = res.data.user.address;
            const contact = res.data.user.contact_number;

            setFirstName(firstName)
            setEmail(email)
            setSecondName(secondName)
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
                                    <h2>First Name</h2>
                                    <p>{firstName}</p>
                                </div>
                                <div className='col-4'>
                                    <h2>Second Name</h2>
                                    <p>{secondName}</p>
                                </div>
                                <div className='col-4'>
                                    <h2>Email</h2>
                                    <p>{email}</p>
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

export default StudentEditParticulars
