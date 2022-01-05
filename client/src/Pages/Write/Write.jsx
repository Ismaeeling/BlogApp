import './write.css';
import axios from "axios";
import {useState, useContext} from "react";
import {Context} from "../../Context/Context";

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try{
                await axios.post("/upload", data);
            }catch(err){

            }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {
            
        }
    }
    return (
        <div className="write">
            {file &&
            <img src={URL.createObjectURL(file)} alt="" className="formImg" />
            
            }
            <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup" >
                <label htmlFor="WriteFile">
                    <i className="fas fa-plus writeFormIcon"></i>
                </label>
                <input type="file" id="WriteFile" style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}/>
                <input className="writeTitle" type="text" placeholder="Title" autoFocus={true} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
                <input className="writeText" type="text" placeholder="Tell your story..." onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
