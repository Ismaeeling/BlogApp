import './home.css';
import Hero from '../../Components/Hero/Hero';
import Posts from '../../Components/Posts/Posts';
import Sidebar from '../../Components/Sidebar/Sidebar';

export default function Home() {
    return (
        <>
        <Hero />
        <div className="home">
            <Posts />
            <Sidebar />
        </div>
        </>
    )
}
