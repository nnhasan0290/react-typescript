import { useState } from "react";
type UserTypes = {
    name : string,
    email: string
}
const UseState = () => {
  const [user, setUser] = useState({} as UserTypes);
  return (
    <div>
      <h2>Use State: User</h2>
      <p>user: {user.name}</p>
      <p>email: {user.email}</p>
      <button
        onClick={() => {
          setUser({ name: "nazmul hasan", email: "nazmulHasan0290@gmail.com" });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default UseState;
