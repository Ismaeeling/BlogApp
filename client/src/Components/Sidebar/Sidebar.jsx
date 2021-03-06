import './sidebar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Sidebar() {
    const [categories, setCategory] = useState([]);

    useEffect( () => {
        const getCategoires = async()=>{
            const category = await axios.get("/categories");
            setCategory(category.data);
        };
        getCategoires();

    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItems">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="" className="sidebarImg" />
                <span className="sidebarDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam facilis, facere.</span>
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {categories.map(c=>(
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
                <div className="sidebarSocial">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram-square"></i>
                    <i className="fab fa-pinterest-square"></i>
                    <i className="fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}
