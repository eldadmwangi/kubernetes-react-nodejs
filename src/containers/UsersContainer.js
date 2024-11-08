import { useEffect, useState } from "react";

const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, [backendUrl]);

  return (
    <div className="App">
      <h1>User List</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>Phone: {user.phone}</p>
              <p>Email: {user.email}</p>
              <p>Address: {user.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default UsersContainer;
