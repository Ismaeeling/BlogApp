import './settings.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

export default function Settings() {
    const {user} = useContext(Context);
    return (
        <div className="settings">
            <div className="settingsContainer">
                <div className="settingsTopHeading">
                    <span className="settingsHeading">Update Your Account</span>
                    <button className="settingsDelete">Delete Account</button>
                </div>
                <form action="" className="settingsForm">
                    <div className="settingsProfile">
                    <img className="settingsProfileImg" src={user.profilePic} alt="" />
                    <label htmlFor="ProfileFile">
                        <i className="far fa-user-circle settingsProfileIcon"></i>
                    </label>
                    <input type="file" id="ProfileFile" style={{display:'none'}}/>
                    </div>
                    <div className="settingsProfileData">
                        <label htmlFor="">Username</label>
                        <input type="text" />
                        <label htmlFor="">Email</label>
                        <input type="email" />
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    <div className="settingsFormButton">
                        <button className="settingsUpdate">Update</button>
                    </div>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
