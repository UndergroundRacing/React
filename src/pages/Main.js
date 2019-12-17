import React from 'react';
import '../css/main.css';
//import '../css/mobile.css';
import Login from './Login';
import Register from './Register';
import About from './About';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            main: true,
            login: false,
            register: false,
            about: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        switch (event.target.id) {
            case "login":
                this.setState({
                    main: false,
                    login: true,
                    register: false,
                    about: false
                });
                break;
            case "register":
                this.setState({
                    main: false,
                    login: false,
                    register: true,
                    about: false
                });
                break;
            case "about":
                this.setState({
                    main: false,
                    login: false,
                    register: false,
                    about: true
                });
                break;
            default:
                this.setState({
                    main: true,
                    login: false,
                    register: false,
                    about: false
                });

        }
    }

    render() {

        if (this.state.main) {
            return (<div>
                    <div className="logo">Underground Streets
                        <span>Šūkis</span>
                    </div>
                    <div className="main-menu">
                        <button id={"login"} onClick={this.handleClick.bind(this)}>Prisijungti</button>
                        <button id={"register"} onClick={this.handleClick.bind(this)}>Registruotis</button>
                        <button id={"about"} onClick={this.handleClick.bind(this)}>Apie žaidimą</button>
                    </div>
                </div>
            );
        } else if (this.state.login) {
            return <Login/>;
        } else if (this.state.register) {
            return <Register/>;
        } else if (this.state.about) {
            return <About/>;
        }
    };

}

export default Main;

