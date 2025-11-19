import { useState, useEffect } from "react";
import Login from "./Login";
import Head from "./Head";
import Menu from "./Menu";
import "./index.css";

export default function Chat() {
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    const logged = localStorage.getItem("isLogged");
    if (logged === "true") setIsLogged(true);
  }, []);

  return (
    <div className="chat-container">
  <Head />
  <div className="chat-content">
    {!isLogged ? (
      <Login setIsLogged={setIsLogged}/>
    ) : (
      <Menu setIsLogged={setIsLogged}/>
    )}
  </div>
</div>

  );
}