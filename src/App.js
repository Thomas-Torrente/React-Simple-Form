import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [form, setForm] = useState(false);

  // De base on dit que form = false

  return (
    <>
      <div className="container">
        {form === false ? (
          <Form
            // On dit que si form est strictement égale a false alors on affiche form / Sinon / voir L.34
            username={username}
            // affiche la données mise
            setUsername={setUsername}
            // raffraichis affichage en cas de modification
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            form={form}
            setForm={setForm}
          />
        ) : (
          // Sinon On affiche Result
          <Result
            username={username}
            email={email}
            password={password}
            setForm={setForm}
            // Dans le résult on affiche les données remplie dans le form par le user
          />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
