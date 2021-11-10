import { useEffect, useState } from 'react';
import './home.css';
import Hero from '../../Components/Hero/Hero';
import Posts from '../../Components/Posts/Posts';
import Sidebar from '../../Components/Sidebar/Sidebar';
import axios from "axios";

export default function Home() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts")
            setPosts(res.data);
        }
        fetchPosts();
    },[])
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
