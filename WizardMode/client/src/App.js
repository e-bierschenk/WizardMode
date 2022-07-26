import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { Nav } from './components/nav/Nav';
import { onLoginStatusChange } from "./modules/authManager";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  return (
    <Router>
      <Nav isLoggedIn={isLoggedIn} />
      <ApplicationViews isLoggedIn={isLoggedIn}/>
    </Router>
  );
}

export default App;

