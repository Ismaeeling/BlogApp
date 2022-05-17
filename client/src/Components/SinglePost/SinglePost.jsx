import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
import { Context } from '../../Context/Context';
import './singlePost.css';



export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPost] = useState([]);
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context);
    
    useEffect(() => {
        const getPost = async ()=>{
            const res = await axios.get("/posts/" +path);
            setPost(res.data);
        } 
        getPost();
    }, [path]);

    const handleDelete = async()=>{
        try {
            await axios.delete(`/posts/${post._id}`,{
                data:{username:user.username},
            });
            window.location.replace("/");
        } catch (err) {
            
        }
    }
    return (
        <div className="singlePost">
            {post.photo &&
            <img src={PF + post.photo} alt="" className="singlePostImg" />
            }
            <div className="singlePostInfo">
                <div className="singlePostTitle">
                    <span>{post.title}</span>
                    {post.username === user?.username && (
                    <div className="singlePostActions">
                        <i className="far fa-edit"></i>
                        <i className="far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                    )}
                </div>
                <div className="singlePostAuth">
                    <span className="singlePostAuthor">
                        Author: 
                        <Link to={`/?username=${post.username}`} className="link">
                        <strong>{post.username}</strong>
                        </Link>
                    </span>
                    <span className="signlePostPublish">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                <p className="singlePostDesc">
                {post.desc}
                </p>
            </div>
        </div>
    )
}
