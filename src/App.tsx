import React, { useState } from "react";
import { User } from "./types/user";
import { Button } from "./components/Button";
import { UserInfo } from "./components/UserInfo";
import { ApiUserConstructor } from "./lib/axiosInstance";
import { useThrottle } from "./lib/hooks/useThrottle";

export const App = () => {
  const [item, setItem] = useState<User | null>(null);
  const throttledUserItem = useThrottle(item);

  const receiveRandomUser = async () => {
    try { 
      const id = Math.floor(Math.random() * (10 - 1)) + 1;
      const user = await ApiUserConstructor.getUserById(id);

      if (user) { 
        setItem(user);
      }
    } catch(error) { 
      console.error(error);
    }
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    receiveRandomUser();
  };

  return (
    <div>
      <header>Get a random user</header>
      <Button onClick={handleButtonClick} title="Get random user" />
      <UserInfo user={throttledUserItem} />
    </div>
  );
};