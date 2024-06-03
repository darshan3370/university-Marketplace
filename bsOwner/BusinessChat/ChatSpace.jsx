import { format } from 'date-fns'
import React, { useEffect } from 'react'

function ChatSpace({ chat }) {
    const userData = JSON.parse(localStorage.getItem('user'));
    const chatParti = JSON.parse(localStorage.getItem('participants'));
    let userName = chat.name;
    let bgImage = <div className="msg-img" style={{ backgroundImage: "url(https://image.flaticon.com/icons/svg/327/327779.svg)" }}></div>;
    let availableData = {
        userName: userName,
        text: chat.text, createdDate: format(new Date(chat.created_at), 'h:m'),
        avatar: bgImage
    };
    let noData = {
        id: '', userName: 'Type below to begin chat', text: '', createdDate: '', avatar: ""
    };
    let isAvailable = chat.id;

    return (
        <div className='msg' id='messageBanner' sender-id={chat.senderId}>
            {isAvailable == 'ABCD' ? noData.avatar : availableData.avatar}
            <div className="msg-bubble">
                <div className="msg-info">
                    <div className="msg-info-name">{isAvailable == "ABCD" ? noData.userName : availableData.userName}</div>
                    <div className="msg-info-time">{isAvailable == 'ABCD' ? noData.createdDate : availableData.createdDate}</div>
                </div>
                <div className="msg-text">
                    {isAvailable == 'ABCD' ? noData.text : availableData.text}
                </div>

            </div>
        </div >
    );
}

export default ChatSpace
