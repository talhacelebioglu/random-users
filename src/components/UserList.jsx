import { useEffect, useState } from "react";
import { User } from "./User";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch data!");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data.results);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="user-list container">
      {error && <div className="users-error"> {error} </div>}
      {isPending && <div className="users-loading">Users loading...</div>}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
