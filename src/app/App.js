import "./App.css";
import { Router } from "react-router-dom";
import { Routes } from "././router";
import history from "./history";
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import AdminPanel from "../Containers/AdminPanel";
import useWindowResize from "../cutomHooks/useWindowResize";

function App() {
  const isMobileScreen = useWindowResize();
  return (
    <div className="App">
      <NavBar isMobileScreen={isMobileScreen} />
      {/* <Router history={history}>{Routes}</Router> */}
      <AdminPanel/>
      <Footer />
    </div>
  );
}

export default App;
