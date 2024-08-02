import { FC } from "react";
import Chat from "../../components/Chat/Chat";
import Friends from "../../components/Friends/Friends";

const ChatPage: FC = () => {
  return (
    <div>
      <Friends friends={[1, 2, 3]} />
      <Chat />
    </div>
  );
};

export default ChatPage;
