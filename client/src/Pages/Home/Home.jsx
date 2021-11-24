import { useEffect, useState } from 'react';
import './home.css';
import Hero from '../../Components/Hero/Hero';
import Posts from '../../Components/Posts/Posts';
import Sidebar from '../../Components/Sidebar/Sidebar';
import axios from "axios";
import { useLocation } from 'react-router';

export default function Home() {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts" + search)
            setPosts(res.data);
        }
        fetchPosts();
    },[search])
    return (
        <>
        <Hero />
        <div className="home">
            <Posts posts={posts} />
            <Sidebar />
        </div>
        </>
    )
}
