import React from "react";
import '../src/css/main.css';
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Garage from "./pages/Garage";

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            home: true,
            about: false,
            shop: false,
            garage: false,
            settings: false,
            logout: false
        };

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event) {
        switch (event.target.id) {
            case "about":
                this.setState({
                    home: false,
                    about: true,
                    news: false,
                    shop: false,
                    garage: false,
                    settings: false,
                    logout: false
                });
                break;
            case "shop":
                this.setState({
                    home: false,
                    about: false,
                    news: false,
                    shop: true,
                    garage: false,
                    settings: false,
                    logout: false
                });
                break;
            case "garage":
                this.setState({
                    home: false,
                    about: false,
                    news: false,
                    shop: false,
                    garage: true,
                    settings: false,
                    logout: false
                });
                break;
            case "settings":
                this.setState({
                    home: false,
                    about: false,
                    news: false,
                    shop: false,
                    garage: false,
                    settings: true,
                    logout: false
                });
                break;
            case "logout":
                this.setState({
                    home: false,
                    about: false,
                    news: false,
                    shop: false,
                    garage: false,
                    settings: false,
                    logout: true
                });
                break;
            default:
                this.setState({
                    home: true,
                    about: false,
                    news: false,
                    shop: false,
                    garage: false,
                    settings: false,
                    logout: false
                });
        }
    }

    render() {
        function LoadPage(props) {
            if (props.props.home) {
                return <HomePage/>;
            } else if (props.props.about) {
                return <About/>;
            } else if (props.props.shop) {
                return <Shop/>;
            } else if (props.props.garage) {
                return <Garage/>;
            } else if (props.props.settings) {
                return null;
            }
        }

        function UserMiniInfo(props) {
            return (<div className={"user-mini-info"}>
                    <span><i className="fa fa-user"/>The Stig</span>
                    <span><i className="fa fa-level-up"/>99</span>
                    <span><i className="fa fa-money"/>100000000$</span>
                    <span><i className="fa fa-credit-card"/>150000</span>
                </div>
            );
        }

        let homeBtn = this.state.home ?
            <li id={"home"} onClick={this.handleClick} style={{color: "red"}}><i className="fa fa-home"/></li> :
            <li id={"home"} onClick={this.handleClick}><i className="fa fa-home"/></li>;

        let aboutBtn = this.state.about ?
            <li id={"about"} onClick={this.handleClick} style={{color: "red"}}>Apie</li> :
            <li id={"about"} onClick={this.handleClick}>Apie</li>;

        let shopBtn = this.state.shop ?
            <li id="shop" onClick={this.handleClick} style={{color: "red"}}>Parduotuvė</li> :
            <li id="shop" onClick={this.handleClick}>Parduotuvė</li>;

        let garageBtn = this.state.garage ?
            <li id={"garage"} onClick={this.handleClick} style={{color: "red"}}>Garažas</li> :
            <li id={"garage"} onClick={this.handleClick}>Garažas</li>;

        let userInfo = this.state.home ? null : <UserMiniInfo/>;

        return (<div>
            <ul className={"top-menu"}>
                <div className={"menu-logo"}><i className="fa fa-flag-checkered"/> Underground Racing</div>
                {homeBtn}
                {aboutBtn}
                {shopBtn}
                {garageBtn}
                <li id={"settings"} onClick={this.handleClick}><i className="fa fa-cog"/></li>
                <li id={"logout"} onClick={this.handleClick}><i className="fa fa-sign-out"/></li>
            </ul>
            {userInfo}
            <LoadPage props={this.state}/>
        </div>);
    }
}

export default Menu;