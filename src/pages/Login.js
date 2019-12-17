import React from 'react';
import '../css/main.css';

//import '../css/mobile.css';
import Main from "./Main";
import ForgotPass from "./ForgotPass";
import Register from "./Register";

class Login extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            email: "",
            password: "",
            login: true,
            forgot_pass: false,
            return: false,
            register: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        switch (event.target.id) {
            case "forgot_pass":
                this.setState({
                    forgot_pass: true,
                    return: false,
                    login: false,
                    register: false
                });
                break;
            case "home":
                this.setState({
                    forgot_pass: false,
                    return: true,
                    login: false,
                    register: false
                });
                break;
            case "register":
                this.setState({
                    forgot_pass: false,
                    return: false,
                    login: false,
                    register: true
                });
                break;
            default:
                this.setState({
                    forgot_pass: false,
                    return: false,
                    login: true,
                    register: false
                });
        }
    }

    handleChange(event) {
        switch (event.target.id) {
            case "email":
                this.setState({
                    email: event.target.value
                });
                break;
            case "password":
                this.setState({
                    password: event.target.value
                });
                break;
            default:
                break;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        if (this.state.login) {
            return (<div className={"log-reg"}>

                <div className={"user-form"}>
                    <div className={"logo"}>Underground Streets</div>

                    <form onSubmit={this.handleSubmit}>
                        <div className={"form-title"}>Prisijungimas</div>
                        <label>
                            El. paštas
                            <input type="email" id={"email"} value={this.state.email} placeholder={"email"} onChange={this.handleChange}/>
                        </label>

                        <label>
                            Slaptažodis
                            <input type="password" id={"password"} value={this.state.password} onChange={this.handleChange}/>
                        </label>

                        <button type="submit">Prisijungti</button>
                    </form>
                    <div className={"form-menu"}>
                        <span id={"forgot_pass"} onClick={this.handleClick}>Slaptažodžio priminimas</span>
                        <i className="fa fa-home" id={"home"} onClick={this.handleClick}/>
                        <i className="fa fa-user-plus" id={"register"} onClick={this.handleClick}/>
                    </div>
                </div>

            </div>);
        } else if (this.state.return) {
            return <Main/>;
        } else if (this.state.forgot_pass) {
            return <ForgotPass/>;
        } else if (this.state.register) {
            return <Register/>
        }
    }
}

export default Login;

