import './home.css';
import Hero from '../../Hero/Hero';
import Posts from '../../Posts/Posts';
import Siderbar from '../../Siderbar/Siderbar';

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
