import  "./header.css";

function Header() {
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
                    <li className="menuListItem">HOME</li>
                    <li className="menuListItem">ABOUT</li>
                    <li className="menuListItem">CONTACT</li>
                    <li className="menuListItem">WRITE</li>
                    <li className="menuListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="headerRight">
                <img className="profileImg" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}

export default Header;