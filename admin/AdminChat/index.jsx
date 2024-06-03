import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import "./Chats.css"
import ChatSpace from "./ChatSpace";

const AdminChats = () => {
    const userData = JSON.parse((localStorage.getItem('user')));
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([]);
    let [chatspace, setChatspace] = useState([]);
    var chatLists = chatspace.map(chat => <ChatSpace chat={chat} />)

    const showChats = async (e) => {
        e.preventDefault();
        var receiverId = e.target.getAttribute('user-id');
        const participants = { receiverId: parseInt(receiverId), senderId: userData.id };

        if (typeof Storage !== 'undefined') {
            localStorage.setItem('participants', JSON.stringify(participants));
            getMessages();
        } else (
            alert('err')
        );
    }
    const userList = users.map(user => <div onClick={showChats} className="list-group" user-id={user.id} >{user.first_name}</div>);

    const participating = JSON.parse(localStorage.getItem('participants'));
    const sendMessage = async (e) => {
        e.preventDefault();
        const data = {
            text: message,
            user_id: userData.id,
            receiverId: participating.receiverId,
        }
        const response = await axios.post('/api/chat', data);
        setMessage('');
    }

    useEffect(() => {
        getUsers();
        getMessages()
    }, []);

    const getUsers = async () => {
        const users = await axios.get('/api/chat/users');
        setUsers(users.data.users)
    }

    const getMessages = async () => {
        const participants = JSON.parse(localStorage.getItem('participants'));
        const chats = await axios.get('/api/chats/' + (participants.senderId + participants.receiverId));

        if (chats.data.chats.length > 0) {
            setChatspace(chats.data.chats);
        } else {
            const unavailable = [{
                created_at: "2022-11-03T09:28:17.000000Z", id: "ABCD",
                name: "Business", relationshipId: "5", senderId: "5", status: "business", text: "Halo mike"
            }];
            setChatspace(unavailable);
        }
    }

    const ourImage = (image) => {
        return '/uploads/' + image;
    }
    return (
        <div className="student-profile">
            <Sidebar />
            <div className="student-profile-contents">
                <Nav />
                <div className="chat-row">
                    <div className="col">
                        <div className="userHolder">
                            <div className="userAvailable">
                                <button className="list-group-item list-group-item-action bg-info p-2">
                                    {userList}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="chatbody col">
                        <div className="msger">
                            <header className="msger-header">
                                <div className="msger-header-title">
                                    Person name
                                </div>
                                <div className="msger-header-options">
                                    <span><i className="fas fa-cog"></i></span>
                                </div>
                            </header>

                            <main className="msger-chat">
                                {chatLists}

                                {/*
                        <div className="msg right-msg">
                            <div
                                className="msg-img"
                            //  style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
                            ></div>

                            <div className="msg-bubble">
                                <div className="msg-info">
                                    <div className="msg-info-name">Sajad</div>
                                    <div className="msg-info-time">12:46</div>
                                </div>

                                <div className="msg-text">
                                    Hi How are you?
                                </div>
                            </div>
                        </div> */}

                            </main>

                            <form className="msger-inputarea" onSubmit={sendMessage}>
                                <input type="text"
                                    className="msger-input"
                                    placeholder="Enter your message..."
                                    required value={message} onChange={(e) => { setMessage(e.target.value) }}
                                />
                                <button type="submit" className="msger-send-btn">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminChats;
