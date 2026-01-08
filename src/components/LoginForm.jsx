import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Email: " + email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;