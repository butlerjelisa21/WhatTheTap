import React, { Component } from "react";
import API from "../utils/api";

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    login = event => {
        event.preventDefault();
        API.login({
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            console.log(response)
            localStorage.setItem("userId", response.data.id)
        })
    }
    
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" value={this.state.email} onChange={this.handleInputChange} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button onClick={this.login} type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}