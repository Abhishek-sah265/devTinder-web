import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addFeed, removeFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { UserCard } from "./UserCard";

export const Feed = () => {
    const feedData = useSelector((state) => state.feed);
    console.log("feedData:", feedData);
    const dispatch = useDispatch();

    const getFeed = async () => {
        if (feedData) return;
        try {
            const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
            dispatch(addFeed(res.data.data));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getFeed();
    }, []);

    return (
        feedData && (
            <div className="flex justify-center y-10">
                <UserCard user={feedData[0]} />
            </div>
        )
    );
}

