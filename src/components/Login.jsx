import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

export const Login = () => {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            const res = await axios.post(
                BASE_URL + "/signup",
                { firstName, lastName, emailId, password },
                { withCredentials: true }
            );
            const userPayload = res?.data;
            dispatch(addUser(userPayload));
            return navigate("/profile");
        } catch (err) {
            setError(err?.response?.data || "Something went wrong");
        }
    };

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login", {
                emailId,
                password
            }, { withCredentials: true }); // to get cookies along with the response, we have to do this in all api calls
            const userPayload = res?.data;
            dispatch(addUser(userPayload));
            navigate("/"); // Navigate to the dashboard after successful login
        } catch (err) {
            setError(err?.response?.data || "Something went wrong");
        }
    };
    return (
        <div className="card card-side bg-base-200 shadow-sm w-150 mx-auto mt-10">
            <figure className="w-500">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs p-4">
                    <legend className="fieldset-legend font-bold text-lg">{isLoginForm ? "Login" : "Sign Up"}</legend>
                    {!isLoginForm && (
                        <>
                            <label className="label">First Name</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label className="label">Last Name</label>
                            <input
                                type="text"
                                className="input"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </>
                    )}
                    <label className="label">Email ID</label>
                    <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                    <label className="label">Password</label>
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <button className="btn btn-primary mt-4" onClick={isLoginForm ? handleLogin : handleSignUp}>  {isLoginForm ? "Login" : "Sign Up"}</button>
                </fieldset>
                <p
                    className="m-auto cursor-pointer py-2"
                    onClick={() => setIsLoginForm((value) => !value)}
                >
                    {isLoginForm
                        ? "New User ? Signup Here"
                        : "Existing User ? Login Here"}
                </p>
            </div>
        </div>
    );
}