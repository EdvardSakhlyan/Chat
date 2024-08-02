import TextInput from "../../UI/TextInput/TextInput";
import styles from "./Chat.module.scss";

const Chat = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.display}></div>
      <TextInput />
    </div>
  );
};

export default Chat;
