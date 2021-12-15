import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import { useContext } from "react";
import  "./header.css";

function Header() {
    const {user, dispatch} = useContext(Context);

    const logoutHandler= ()=>{
        dispatch({type:"LOGOUT"});
    }
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
                    <li className="menuListItem" onClick={logoutHandler}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="headerRight">
                {user ? (<img className="profileImg" src={user.profilePic} alt="" />):
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