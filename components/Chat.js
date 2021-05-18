import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/chat.module.scss";

export default function Chat() {
  const [chatList, setChatList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(async () => {
    const result = await axios.get("http://www.localhost:1337/chats");
    setChatList(result?.data);
  }, []);

  const onMessageSend = async () => {
    axios.post("http://www.localhost:1337/chats", { msg: msg });
    setMsg("");
    const result = await axios.get("http://www.localhost:1337/chats");
    setChatList(result?.data);
  };
  return (
    <div className={styles.chatWrapper}>
      <h1>Chat Here!</h1>
      <div className={styles.msgContainer}>
        {chatList.map((item) => {
          return <span key={item.id}>{item.msg}</span>;
        })}
      </div>
      <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={onMessageSend}>SEND</button>
    </div>
  );
}
