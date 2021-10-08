import './hero.css'

export default function Hero() {
    return (
        <div className="hero">
            <div className="heroTitles">
                <span className="heroName">Hero Name</span>
                <span className="heroTitle">Hero Title</span>
            </div>
            <img className="heroImg" src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="" />
        </div>
    )
}
