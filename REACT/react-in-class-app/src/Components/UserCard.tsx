import { useState } from "react";

export const UserCard = ({ user }: any) => {
  const [isIdShown, setIsIdShown] = useState(false);
  const [isUserCardShown, setIsUserCardShown] = useState(true);

  const visibilityHandler = () => {
    if (isUserCardShown) {
      setIsIdShown(true);
      return setIsUserCardShown(false);
    }

    setIsIdShown(false);
    setIsUserCardShown(true);
  };

  return (
    <div onClick={visibilityHandler} className="user-container">
      {isUserCardShown && (
        <div>
          <p>{user.login}</p>
          <p>{user.url}</p>
          <p>{user.type}</p>
        </div>
      )}
      {isIdShown && <p>{user.id}</p>}
    </div>
  );
};
