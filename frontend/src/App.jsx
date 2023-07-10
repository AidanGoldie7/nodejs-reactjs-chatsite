import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    //if user does not expist, render the Auth Page
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    //if user does exist, render the Chatspage
    return <ChatsPage user={user} />;
  }
}

export default App;