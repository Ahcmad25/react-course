import './App.css'
import { useState } from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import NameInput from './components/NameInput';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const role = "Software Engineer";
  const [isOn, setIsOn] = useState(false);
  const [name, setName] = useState("John Dee");
  const [age, setAge] = useState("19");

  return (
    <>
      <Greeting/>
      <Counter/>
      <NameInput/>
      <LoginForm/>
      <RegisterForm/>
    </>
  );
}

export default App
