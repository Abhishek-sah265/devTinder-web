import { EditProfile } from "./EditProfile";
import { useSelector } from "react-redux";

export const Profile = () => {
    const userData = useSelector((state) => state.user);
    return (
        userData && (<div>
            <EditProfile userData={userData} />
        </div>)
    );
};   