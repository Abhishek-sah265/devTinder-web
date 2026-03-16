import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const user = useSelector((state) => state.user);
    console.log("User in NavBar: ", user);
    return (
        <div className="navbar bg-base-300 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl"> 🧑‍💻 DevTinder</Link>
            </div>
            <div className="flex gap-2">
                {user && (<p className="flex items-center gap-2">Welcome, {user.firstName}</p>)}
                <div className="dropdown dropdown-end mx-2">
                    {user &&
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User Photo"
                                    src={user.photoUrl} />
                            </div>
                        </div>
                    }
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
