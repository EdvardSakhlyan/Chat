import { useEffect, useRef, useState } from "react";
import TextInput from "../../UI/TextInput/TextInput";
import styles from "./Chat.module.scss";
import styled from "styled-components";

const MessageBlock = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing.small,
  background: theme.colors.powderWhite,
  padding: theme.spacing.small,
  borderRadius: theme.spacing.small,
}));

const MessageBlockWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,
  overflow: "auto",
}));

const DateBlock = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.small,
}));

const TextBlock = styled("div")(({ theme }) => ({
  display: "flex",
  justifySelf: "start",
  width: "100%",
  fontSize: theme.fontSize.sm,
}));

const SenderBlock = styled("div")(({ theme }) => ({
  textDecoration: "underline",
  fontSize: theme.fontSize.md,
}));

const ChatWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

interface IMessage {
  text: string;
  sender: string;
  date: Date;
}

const Chat = () => {
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState<IMessage[]>([
    { date: new Date(), sender: "Tom", text: "Hello firiends!" },
    { date: new Date(), sender: "Holand", text: "Hello" },
    {
      date: new Date(),
      sender: "Cruze",
      text: "Hello everybody ajksdnjkasndjk ajksndkjansdkj ajknsdjkansjkd ajksndjkansdjk akjdnskjansdj ajksdnjaknksdj djkandjknasd ajnsdkjasd ajknsdkjas dajksnda ndjkand akjsnd",
    },
    { date: new Date(), sender: "Sam", text: "Hello" },
    { date: new Date(), sender: "Tom", text: "Hello" },
    { date: new Date(), sender: "Tom", text: "Hello" },
    { date: new Date(), sender: "Tom", text: "Hello" },
    { date: new Date(), sender: "Tom", text: "Hello" },
    { date: new Date(), sender: "Tom", text: "Hello" },
    { date: new Date(), sender: "Tom", text: "Hello" },
    { date: new Date(), sender: "Tom", text: "Hello" },
    { date: new Date(), sender: "Tom", text: "Hello" },
    { date: new Date(), sender: "Tom", text: "Hello" },
    { date: new Date(), sender: "Tom", text: "Hello" },
  ]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ChatWrapper>
      <MessageBlockWrapper ref={messagesEndRef}>
        {messages.map(({ date, text, sender }) => {
          return (
            <MessageBlock>
              <SenderBlock>{sender}</SenderBlock>
              <TextBlock>{text}</TextBlock>
              <DateBlock>
                <span>{date.toLocaleDateString()}</span>
                <span>{date.toLocaleTimeString()}</span>
              </DateBlock>
            </MessageBlock>
          );
        })}
        <div ref={messagesEndRef}></div>
      </MessageBlockWrapper>
      <TextInput />
    </ChatWrapper>
  );
};

export default Chat;
