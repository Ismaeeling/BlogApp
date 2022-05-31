import './settings.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import axios from 'axios';

export default function Settings() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [success, setSuccess] = useState(false)
    const {user} = useContext(Context);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try{
                await axios.post("/upload", data);
            }catch(err){

            }
        }
        try {
            await axios.put("/users/"+user._id, updatedUser);
            setSuccess(true);
        } catch (err) {
            
        }
    }
    return (
        <div className="settings">
            <div className="settingsContainer">
                <div className="settingsTopHeading">
                    <span className="settingsHeading">Update Your Account</span>
                    <button className="settingsDelete">Delete Account</button>
                </div>
                <form action="" className="settingsForm" onSubmit={handleSubmit}>
                    <div className="settingsProfile">
                    <img className="settingsProfileImg" src={user.profilePic} alt="" />
                    <label htmlFor="ProfileFile">
                        <i className="far fa-user-circle settingsProfileIcon"></i>
                    </label>
                    <input type="file" id="ProfileFile" style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}/>
                    </div>
                    <div className="settingsProfileData">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder={user.username} onChange={(e)=>{setUsername(e.target.value)}}/>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder={user.email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={(e)=>{setPassowrd(e.target.value)}}/>
                    </div>
                    <div className="settingsFormButton">
                        <button className="settingsUpdate" type="submit">Update</button>
                    </div>
                    {success && <span style={{color:"green"}}>User has been updated</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
