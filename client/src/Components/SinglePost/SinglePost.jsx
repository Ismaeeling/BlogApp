import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './singlePost.css';

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPost] = useState([]);
    
    useEffect(() => {
        const getPost = async ()=>{
            const res = await axios.get("/posts/" +path);
            setPost(res.data);
        } 
        getPost();
    }, [path])
    return (
        <div className="singlePost">
            {post.photo &&
            <img src="https://www.topgear.com/sites/default/files/images/news-article/2019/09/8b9981f2be8ad1d2c90af3dfb83e4f74/02_ss300p_3i4_front.jpg" alt="" className="singlePostImg" />
            }
            <div className="singlePostInfo">
                <div className="singlePostTitle">
                    <span>{post.title}</span>
                    <div className="singlePostActions">
                        <i className="far fa-edit"></i>
                        <i className="far fa-trash-alt"></i>
                    </div>
                </div>
                <div className="singlePostAuth">
                    <span className="singlePostAuthor">
                        Author: <strong>{post.username}</strong>
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
