import {Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Navbar = () => {
    const {user, logout} = useAuth();

    return (
        <nav>
            <Link to="/">Task</Link>
            {!user && (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
            {user && (
                <>
                    <span>Welcome, {user.name} {user.role}</span>
                    <button onClick={logout}>Logout</button>
                </>
            )}
        </nav>
    )
}

export default Navbar;