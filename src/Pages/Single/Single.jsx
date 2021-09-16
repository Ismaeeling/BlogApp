import './single.css';
import Siderbar from '../../Components/Siderbar/Siderbar';
import SinglePost from '../../Components/SinglePost/SinglePost';

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Siderbar />
        </div>
    )
}
