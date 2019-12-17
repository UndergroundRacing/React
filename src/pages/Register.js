import React from 'react';
import '../css/main.css';

//import '../css/mobile.css';
import Main from "./Main";

class Register extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            email: "",
            user_name: "",
            password: "",
            repeat_pass: "",
            register: true,
            home: false,
            pass_match: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

        this.setState({
            register: false,
            home: true
        });

    }

    handleChange(event) {
        switch (event.target.id) {
            case "email":
                this.setState({
                    email: event.target.value
                });
                break;
            case "user_name":
                this.setState({
                    user_name: event.target.value
                });
                break;
            case "pass":
                this.setState({
                    password: event.target.value
                });
                break;
            case "repeat_pass":
                this.setState({
                    repeat_pass: event.target.value
                });
                break;
            default:
                break;
        }
    }

    handleSubmit(event) {
        if (this.state.pass === this.state.repeat_pass) {
            alert("Slaptažodžiai sutampa");
            this.setState({pass_match: true});
        } else {
            this.setState({pass_match: false});
        }
        event.preventDefault();
    }

    render() {

        let warning_msg = this.state.pass_match === false ?
            <span className={"form-warn"}>Slaptažodžiai turi sutapti</span> : null;

        if (this.state.register) {
            return (<div className={"log-reg"}>

                <div className={"user-form"}>
                    <div className={"logo"}>Underground Streets</div>

                    <form onSubmit={this.handleSubmit}>
                        <div className={"form-title"}>Registracija</div>
                        <label>
                            El. paštas
                            <input type="email" id={"email"} value={this.state.email} onChange={this.handleChange}/>
                        </label>

                        <label>
                            Vartotojo vardas
                            <input type="text" id={"user_name"} value={this.state.user_name}
                                   onChange={this.handleChange}/>
                        </label>

                        <label>
                            Slaptažodis
                            <input type="password" id={"pass"} value={this.state.password} onChange={this.handleChange}/>
                        </label>

                        <label>
                            Pakartokite slaptažodį
                            <input type="password" id={"repeat_pass"} value={this.state.repeat_pass}
                                   onChange={this.handleChange}/>
                        </label>

                        <button type="submit">Registruotis</button>

                        {warning_msg}
                    </form>
                    <div className={"form-menu"}>
                        <i className={"fa fa-home"} id={"home"} onClick={this.handleClick}/>
                    </div>
                </div>

            </div>);
        } else if (this.state.home) {
            return <Main/>;
        }
    }
}

export default Register;

