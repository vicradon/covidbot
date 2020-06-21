import React from "react";
import axios from 'axios';
import Chatbot from "./components/Chatbot";
import "./styles.css";

const App = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [initialSteps, setInitialSteps] = React.useState()

  React.useEffect(() => {
    axios
      .get("https://covidbot1--vicradon.repl.co")
      .then(res => {
        setInitialSteps(res.data.data)
        setLoaded(true)
      });
  }, []);
  return <div>{loaded ? <Chatbot initialSteps={initialSteps}  /> : <p>Loading...</p>}</div>;
};

export default App;
