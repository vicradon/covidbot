import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import steps from "../constants/steps";
import theme from "../constants/theme";
import styles from "./chatbot.module.css";

const Bot = ({initialSteps}) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.chatbotcomponentwrapper}>
        <ChatBot steps={[...initialSteps, ...steps]} />
      </div>
    </ThemeProvider>
  );
};

export default Bot;
