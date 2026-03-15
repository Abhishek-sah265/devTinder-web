import axios from "axios";
import { useState } from "react";

export const Login = () => {

    const [emailId, setEmailId] = useState("ratata@gmail.com");
    const [password, setPassword] = useState("Ratata@123");

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:7777/login", {
                emailId,
                password
            }, { withCredentials: true }); // to get cookies along with the response
            console.log(res.data);
        } catch (err) {
            console.log(err);
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
                    <legend className="fieldset-legend font-bold text-lg">Login</legend>
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
                    <button className="btn btn-primary mt-4" onClick={handleLogin}>Login</button>
                </fieldset>
            </div>
        </div>
    );
}