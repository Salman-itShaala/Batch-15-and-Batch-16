import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

function ContactUs() {
  const params = useParams();
  console.log(params.id);

  return (
    <>
      {/* <Header /> */}
      <h1>ContactUs id is {params.id}</h1>
    </>
  );
}

export default ContactUs;
