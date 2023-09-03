import React from "react";
import ailogo from "../../assets/images/ailogo.jpg";

import "./Chat.css";
const Chat = () => {
  return (
    <>
      <div className="chat-page-main-con">
        <div className="chat-left-sidebar">
          <div className="main-logo">
            <img className="logo-img" src={ailogo} />
            <div className="logo-info">
              <h2 className="logo-title">Edupilot</h2>
              <p className="logo-description">by DeepDream</p>
            </div>
          </div>
          <div className="btn-new">New Chat</div>
        </div>
        <div className="chat-right-part">
          <div className="chat-nav-icons">
            <h2 className="icon1">EduPilot</h2>
          </div>

          <div className="message-main-con">
            <div className="message-body message-body-left">
              <p className="message-content">Sure, here is my answer</p>
            </div>

            <div className="message-body message-body-right">
              <p className="message-content">Sure, here is my answer</p>
            </div>
          </div>

          <div className="chat-box">
            <input
              type="text"
              className="chat-input"
              placeholder="Write for ai"
            />
            <a href="#" className="btn-send">
              Chat
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
