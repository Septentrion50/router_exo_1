import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/works">Works</Link>
        </nav>
    );
};

export default Navigation;