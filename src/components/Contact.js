import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="props.name" />
      <div className="status">
        <h3 className="name">{props.name}</h3>
        <span className={props.online ? "status-online" : "status-offline"}></span>
        <p className="status-text">{props.online ? "online" : "offline"}</p>
      </div>
    </div>
  );
}

export default Contact;
