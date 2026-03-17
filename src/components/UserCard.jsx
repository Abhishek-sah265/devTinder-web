
export const UserCard = ({ user }) => {
    console.log("usercard",user);
    const { firstName, lastName, photoUrl, about, age, gender } = user;
    return (
        <div className="card bg-base-400 w-96 shadow-sm">
            <figure>
                <img
                    src={photoUrl}
                    alt="Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName} {lastName}</h2>
                {age && <p>Age: {age}</p>}
                {gender && <p>Gender: {gender}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
        </div>
    );
}