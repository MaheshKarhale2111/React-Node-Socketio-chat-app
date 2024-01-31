import React from "react";

import onlineIcon from "../icons/onlineIcon.png";
import { Link } from "react-router-dom";

import "./textcontainer.css";

export default function TextContainer({ users }) {
  // console.log(users);

  return (
    <div className="textContainer">
      <div className="header-div" >
        <h1>
          Realtime Chat Application{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>Made with React, Express, Node and Socket.IO </h2>
        
      </div>

      <div className="help">
          <h2>Open another session with same 
            room name and join the chat!!</h2>
      </div>
      {users ? (
        <div className="current-users">
          <h1>People Currently Online:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
