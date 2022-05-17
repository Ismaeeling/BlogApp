import './post.css';
import {Link} from "react-router-dom";

export default function Post({post}) {
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
            {post.photo && (
                <div className="postImg">
                    <Link to={`/post/${post._id}`} className="link">
                    <img src={PF + post.photo} alt="" />
                    </Link>
                </div>
            )}
            
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map(c=>(
                        <span className="postCat">{c.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <span className="postPublish">{new Date(post.createdAt).toDateString()}</span>
                <span className="postDesc">{post.desc}</span>
            </div>
        </div>
    )
}
