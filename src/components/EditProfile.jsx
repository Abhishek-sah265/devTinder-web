import { useState } from "react";
import { UserCard } from "./UserCard";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const EditProfile = ({ userData }) => {
    const [firstName, setFirstName] = useState(userData.firstName || "");
    const [lastName, setLastName] = useState(userData.lastName || "");
    const [age, setAge] = useState(userData.age || "");
    const [gender, setGender] = useState(userData.gender || "");
    const [about, setAbout] = useState(userData.about || "");
    const [photoUrl, setPhotoUrl] = useState(userData.photoUrl || "");
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();

    const handleSaveProfile = async () => {
        setError("");
        try {
            const updatedProfile = { firstName, lastName, age, gender, about, photoUrl };
            const res = await axios.patch(BASE_URL + "/profile/edit", updatedProfile, { withCredentials: true });
            dispatch(addUser(res?.data?.data)); // Update user data in Redux store
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        } catch (err) {
            setShowToast(false);
            setError(err?.response?.data || "Error updating profile");
        }
    };

    return (
        <div className="flex justify-center mt-10">
            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box border w-96 p-7 mx-10">
                <legend className="fieldset-legend text-lg font-bold">Profile Edit</legend>

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

                <label className="label">Age</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <label className="label">Gender</label>
                <select defaultValue={gender ? gender : "Select gender"} className="select" onChange={(e) => setGender(e.target.value)}>
                    <option disabled={true}>Select gender</option>
                    <option>male</option>
                    <option>female</option>
                    <option>other</option>
                </select>

                <label className="label">About</label>
                <textarea
                    className="textarea"
                    placeholder="About"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                ></textarea>

                <label className="label">Photo URL</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Photo URL"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                />
                <button className="btn btn-primary mt-4" onClick={handleSaveProfile}>Save Profile</button>
                {error && <p className="text-red-500">{error}</p>}
            </fieldset>
            <UserCard user={{ firstName, lastName, age, gender, about, photoUrl }} />
            {showToast && (
                <div className="toast toast-top toast-center mt-14">
                    <div className="alert alert-success">
                        <span>Profile saved successfully</span>
                    </div>
                </div>
            )}
        </div>


    );
};