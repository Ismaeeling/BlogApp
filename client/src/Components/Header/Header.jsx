import { Link } from "react-router-dom";
import  "./header.css";

function Header() {
    const user = true;
    return (
        <div id="Header">
            <div className="headerLeft">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-pinterest-square"></i>
                <i className="fab fa-twitter-square"></i>
            </div>
            <div className="headerCenter">
                <ul className="menuList">
                    <li className="menuListItem">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="menuListItem">
                        <Link to="/about" className="link">ABOUT</Link>
                    </li>
                    <li className="menuListItem">
                        <Link to="/contact" className="link">CONTACT</Link>
                    </li>
                    <li className="menuListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="menuListItem">
                        {user && <Link to="/logout" className="link">LOGOUT</Link> }
                    </li>
                </ul>
            </div>
            <div className="headerRight">
                {user ? (<img className="profileImg" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />):
                 <ul className="menuList">
                    <li className="menuListItem">
                        <Link to="/login" className="link">LOGIN</Link>
                    </li>
                    <li className="menuListItem">
                        <Link to="/register" className="link">REGISTER</Link>
                    </li>
                </ul>
                 }
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}

export default Header;