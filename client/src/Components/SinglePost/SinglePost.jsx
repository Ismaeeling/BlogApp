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
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    
    useEffect(() => {
        const getPost = async ()=>{
            const res = await axios.get("/posts/" +path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
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

    const handleUpdate = async()=>{
        try {
            await axios.put(`/posts/${post._id}`,{
                username: user.username,
                title,
                desc
            });
            // window.location.reload();
            setUpdateMode(false);
        } catch (err) {
            
        }
    }
    return (
        <div className="singlePost">
            {post.photo &&
            <img src={PF + post.photo} alt="" className="singlePostImg" />
            }
            <div className="singlePostInfo">
                {updateMode ? <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="singlePostTitleInput" autoFocus/> : (
                    <div className="singlePostTitle">
                        <span>{title}</span>
                        {post.username === user?.username && (
                        <div className="singlePostActions">
                            <i className="far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                            <i className="far fa-trash-alt" onClick={handleDelete}></i>
                        </div>
                        )}
                    </div>
                )}
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
                { updateMode ? <textarea value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="singlePostDescInput"/> : (
                <p className="singlePostDesc">
                {desc}
                </p>
                )}
                {updateMode && <button className="singlePostUpdate" onClick={handleUpdate}>Update</button> }
                
            </div>
        </div>
    )
}
