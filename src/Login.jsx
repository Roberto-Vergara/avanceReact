import { useState } from "react";
import axios from "axios";

export default function Login({ setIsLogged }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/login/", {
        username: user,
        password: pass,
      });

      if (res.status !== 200) throw "Usuario incorrecto";

      localStorage.setItem("isLogged", "true");
      setIsLogged(true);

    } catch (error) {
      setError("Error al iniciar sesión");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        className="chat-input"
        type="text"
        placeholder="Usuario"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        className="chat-input"
        type="password"
        placeholder="Contraseña"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button className="chat-btn" type="submit">Ingresar</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}