// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
import { Header } from "./stories/Header";
import InputField from "./stories/InputField";

type User = {
  name: string;
};

function App() {
  const [user, setUser] = React.useState<User>();
  return (
    <div id="app">
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />
      <InputField />
    </div>
  );
}

export default App;
