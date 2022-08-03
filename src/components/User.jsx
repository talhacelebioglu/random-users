export const User = ({ user }) => {
  return (
    <div className="user">
      <img src={user.picture.large} alt="" />
      <div className="user-info">
        <h3>
            {user.name.first} {user.name.last}
        </h3>
        <p className="user-mail">Email: {user.email}</p>
        <p className="user-location">
            {user.location.country} | {user.location.city}
        </p>
      </div>
    </div>
  );
};
