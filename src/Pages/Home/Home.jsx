import './home.css';
import Hero from '../../Components/Hero/Hero';
import Posts from '../../Components/Posts/Posts';
import Siderbar from '../../Components/Siderbar/Siderbar';

export default function Home() {
    return (
        <>
        <Hero />
        <div className="home">
            <Posts />
            <Siderbar />
        </div>
        </>
    )
}
