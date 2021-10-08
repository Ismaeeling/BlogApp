import './write.css';

export default function Write() {
    return (
        <div className="write">
            <img src="https://www.topgear.com/sites/default/files/images/news-article/2019/09/8b9981f2be8ad1d2c90af3dfb83e4f74/02_ss300p_3i4_front.jpg" alt="" className="formImg" />
            <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="WriteFile">
                    <i className="fas fa-plus writeFormIcon"></i>
                </label>
                <input type="file" id="WriteFile" style={{display:'none'}}/>
                <input className="writeTitle" type="text" placeholder="Title" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <input className="writeText" type="text" placeholder="Tell your story..."/>
            </div>
            <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
