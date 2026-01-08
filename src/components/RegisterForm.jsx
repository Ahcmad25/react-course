import { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <input name="email" value={form.email} onChange={handleChange}/>
      <input name="password" type="password" value={form.password} onChange={handleChange}/>
    </>
  );
}

export default RegisterForm;