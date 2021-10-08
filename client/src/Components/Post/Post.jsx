import './post.css'

export default function Post() {
    return (
        <div className="post">
            <div className="postImg">
                <img src="https://www.topgear.com/sites/default/files/images/news-article/2019/09/8b9981f2be8ad1d2c90af3dfb83e4f74/02_ss300p_3i4_front.jpg" alt="" />
            </div>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Life</span>
                    <span className="postCat">Music</span>
                </div>
                <span className="postTitle">Lorem Ipsum</span>
                <span className="postPublish">1 hour ago</span>
                <span className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magnam beatae nobis laudantium dicta molestias fuga perspiciatis ducimus quasi aut reprehenderit corrupti ad nemo? Sit molestias illo numquam atque porro.</span>
            </div>
        </div>
    )
}
