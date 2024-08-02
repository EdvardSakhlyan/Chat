import { FC } from "react";
import styles from "./Friends.module.scss";

interface IFrientsProps {
  friends: any[];
}

const Friends: FC<IFrientsProps> = ({ friends }) => {
  return (
    <div className={styles.wrapper}>
      {friends.map((friend) => {
        return <div>last message</div>;
      })}
    </div>
  );
};

export default Friends;
