import React from "react";
import logo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logo} />
        </div>

        <div className="background">
          <div className="Badge__section-name">
            <img
              className="Badge__avatar"
              src="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              alt="Avatar"
            />
            <h1>
              {this.props.name} <br /> {this.props.lastname}
            </h1>
          </div>

          <div className="Badge__section-info">
            <h3>Frontend Engineer</h3>
            <div>@{this.props.twitter}</div>
          </div>

          <div className="Badge__footer">#platziconf</div>
        </div>
      </div>
    );
  }
}

export default Badge;
