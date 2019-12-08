import React from "react";

class BadgeForm extends React.Component {
  state = {
    jobTitle: "Designer"
  };

  handleChange = event => {
    /* console.log({
      inputName: event.target.name,
      inputValue: event.target.value
    }); */
    /* this.setState({
      inputName: event.target.value
    }); */

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = event => {
    console.log({
      nameButton: event.target.name
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New attendant!</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>

          <button
            onClick={this.handleClick}
            name="save button"
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
