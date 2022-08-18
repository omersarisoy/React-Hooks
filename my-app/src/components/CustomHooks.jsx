import React, { useEffect, useState } from "react";
import "./CustomHooks.css";
import { useInput } from "./hooks/UseInput";
import { useLocalStorage } from "./hooks/UseLocalStarge";

export default function CustomHooks() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");

// const [inputs, setInputs] = useState({ name: "", age: "", email:"" })

// const handleChange = event => {
//     setInputs({ ...inputs, [event.target.name]: event.target.value})
// }

// const localStorageInputs = localStorage.getItem('inputs' )
// console.log('localStorageInputs :>> ', JSON.parse(localStorageInputs));

const INITIAL_STATE = {
    name: "",
    age: "",
    email: "",
    question:""
}

// const [storage, setStorage] = useLocalStorage('inputs', INITIAL_STATE)

const [inputs, setInputs] = useInput('inputs', INITIAL_STATE);

// useEffect(() => {
//     setStorage(inputs)
// }, [inputs])

return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h2>Özel hook nasıl yazılır?</h2>
      { /* prettier-ignore */}
      <form>
        <label htmlFor="name">
        Name: <input name="name" value={inputs.name} onChange={setInputs} />
        </label>
        <label htmlFor="age">
        Age: <input name="age" value={inputs.age} onChange={setInputs} />
        </label>
        <label htmlFor="email">
        Email: <input name="email" value={inputs.email} onChange={setInputs} />
        </label>
        <label htmlFor=" security question">
        Cats Name: <input name="question" value={inputs.question} onChange={setInputs} />
        </label>
      </form>
    </div>
  );
}
