import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <h1>Home</h1>
      <br />
      <br />
      <Link to="contact-us">Contact us</Link>
      <br />
      <br />
      <Link to="about-us">About us</Link>
      <br />
      <br />
      {/* <NavLink to="contact-us">Contact us navlink</NavLink> */}
    </>
  );
}

export default Home;
