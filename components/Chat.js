import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/chat.module.scss";

export default function Chat() {
  const [chatList, setChatList] = useState([]);
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  useEffect(async () => {
    const result = await axios.get("http://www.localhost:1337/chats");
    setChatList(result?.data);
  }, []);

  const onMessageSend = async () => {
    if (msg === "" || name === "") {
      alert("You missed something there bud");
      return;
    }
    axios.post("http://www.localhost:1337/chats", { msg: msg, name: name });
    setMsg("");
    const result = await axios.get("http://www.localhost:1337/chats");
    setChatList(result?.data);
  };

  return (
    <div className={styles.chatWrapper}>
      <h1>Chat Here!</h1>
      <div className={styles.msgContainer}>
        {chatList.map((item) => {
          return (
            <>
              <div key={item.id} className={styles.msg}>
                <span>{item.msg}</span>{" "}
                <span className={styles.msgName}>{item.name}</span>
              </div>
            </>
          );
        })}
      </div>
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Write your message here..."
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Write your name here..."
      />
      <button onClick={onMessageSend}>SEND</button>
    </div>
  );
}
