import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Notes from "./pages/Notes";
import Note from "./pages/Note";
import { useState } from "react";

function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem("theme");
    if (list) {
      return JSON.parse(localStorage.getItem("theme"));
    } else {
      return "dark";
    }
  };

  const [theme, setTheme] = useState(getLocalStorage());
  return (
    <Router>
      <div className={`container ${theme}`}>
        <div className="app">
          <Header theme={theme} setTheme={setTheme} />
          <Route path="/" component={Notes} exact />
          <Route path="/note/:id" component={Note} />
        </div>
      </div>
    </Router>
  );
}

export default App;
