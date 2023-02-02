import { useState } from "react";

export const UserCard = ({ user }: any) => {
  const [isIdShown, setIsIdShown] = useState(false);

  const visibilityHandler = () => {
    setIsIdShown((prevIsIdShown) => !prevIsIdShown);
    // if (!isIdShown) {
    //   setIsIdShown(true);
    //   return;
    // }

    // setIsIdShown(false);
  };

  return (
    <div onClick={visibilityHandler} className="user-container">
      {isIdShown ? (
        <p>{user.id}</p>
      ) : (
        <div>
          <p>{user.login}</p>
          <p>{user.url}</p>
          <p>{user.type}</p>
        </div>
      )}
    </div>
  );
};
