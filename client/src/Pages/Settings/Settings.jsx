import './settings.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsContainer">
                <div className="settingsTopHeading">
                    <span className="settingsHeading">Update Your Account</span>
                    <button className="settingsDelete">Delete Account</button>
                </div>
                <form action="" className="settingsForm">
                    <div className="settingsProfile">
                    <img className="settingsProfileImg" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="" />
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
