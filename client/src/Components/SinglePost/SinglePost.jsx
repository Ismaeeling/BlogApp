import './singlePost.css';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <img src="https://www.topgear.com/sites/default/files/images/news-article/2019/09/8b9981f2be8ad1d2c90af3dfb83e4f74/02_ss300p_3i4_front.jpg" alt="" className="singlePostImg" />
            <div className="singlePostInfo">
                <div className="singlePostTitle">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                    <div className="singlePostActions">
                        <i className="far fa-edit"></i>
                        <i className="far fa-trash-alt"></i>
                    </div>
                </div>
                <div className="singlePostAuth">
                    <span className="singlePostAuthor">
                        Author: <strong>Madal</strong>
                    </span>
                    <span className="signlePostPublish">
                        1 hour ago
                    </span>
                </div>
                <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit recusandae cupiditate, nulla quae quaerat, ipsa repellat quas dignissimos temporibus quia iste voluptas impedit sint obcaecati voluptates, fugit fuga repellendus a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit recusandae cupiditate, nulla quae quaerat, ipsa repellat quas dignissimos temporibus quia iste voluptas impedit sint obcaecati voluptates, fugit fuga repellendus a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit recusandae cupiditate, nulla quae quaerat, ipsa repellat quas dignissimos temporibus quia iste voluptas impedit sint obcaecati voluptates, fugit fuga repellendus a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit recusandae cupiditate, nulla quae quaerat, ipsa repellat quas dignissimos temporibus quia iste voluptas impedit sint obcaecati voluptates, fugit fuga repellendus a! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit recusandae cupiditate, nulla quae quaerat, ipsa repellat quas dignissimos temporibus quia iste voluptas impedit sint obcaecati voluptates, fugit fuga repellendus a!
                </p>
            </div>
        </div>
    )
}
