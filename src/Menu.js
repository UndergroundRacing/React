import React from "react";
import '../src/css/main.css';
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Garage from "./pages/Garage";

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event) {
        switch (event.target.id) {
            case "shop":
                this.props.history.push('/Shop');
                break;
            case "garage":
                this.props.history.push('/Garage');
                break;
            case "settings":

                break;
            case "logout":
                this.props.history.push('/');
                break;
            default:
                this.props.history.push('/Home');
        }
    }

    render() {
        function LoadPage(props) {

            console.log('Page link', window.location.pathname);

            let location = window.location.pathname;

            if (location === "/Home") {
                return <HomePage/>;
            } else if (location === "/Shop") {
                return <Shop/>;
            } else if (location === "/Garage") {
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

        let homeBtn = window.location.pathname === "/Home" ?
            <li id={"home"} onClick={this.handleClick} style={{color: "red"}}><i className="fa fa-home"/></li> :
            <li id={"home"} onClick={this.handleClick}><i className="fa fa-home"/></li>;

        let shopBtn = window.location.pathname === "/Shop" ?
            <li id="shop" onClick={this.handleClick} style={{color: "red"}}>Parduotuvė</li> :
            <li id="shop" onClick={this.handleClick}>Parduotuvė</li>;

        let garageBtn = window.location.pathname === "/Garage" ?
            <li id={"garage"} onClick={this.handleClick} style={{color: "red"}}>Garažas</li> :
            <li id={"garage"} onClick={this.handleClick}>Garažas</li>;

        let userInfo = window.location.pathname !== "/Home" ? <UserMiniInfo/> : null;

        return (<div>
            <ul className={"top-menu"}>
                <div className={"menu-logo"}><i className="fa fa-flag-checkered"/> Underground Racing</div>
                {homeBtn}
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