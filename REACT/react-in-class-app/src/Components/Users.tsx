import { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "./UserCard";

export const Users = () => {
  const [users, setUsers] = useState<any[]>([]);

  const getData = async () => {
    const { data } = await axios.get(` https://api.github.com/users`);
    setUsers(data);

    //try catch
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
