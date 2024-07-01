import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Careers from "./components/careers";
import About from "./components/about";
import EmpList from "./components/EmpList";
import EmpCreate from "./components/EmpCreate";
import EmpEdit from "./components/EmpEdit";
import EmpDetail from "./components/EmpDetail";
import Header from "./components/header";
import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    
    <ThemeProvider theme={theme}>

    <div className="App">
      <div className="App">
       
        <BrowserRouter>
        <Header />
          <Routes>
            <Route index element={<EmpList />}></Route>
            <Route path="/employee/create" element={<EmpCreate />}></Route>
            <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
            <Route path="/employee/detail/:empid" element={<EmpDetail/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/career" element={<Careers />}></Route>
          </Routes>
          
        </BrowserRouter>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
