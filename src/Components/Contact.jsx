import React, { useState, useEffect, useContext } from "react";
import { TbWorld, TbMail, TbPhone } from "react-icons/tb";
import Footer from "./Footer";
import MyContext from "./context";
export default function Contact() {
  const pic = useContext(MyContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  useEffect =
    (() => {
      const savedName = localStorage.getItem("name");
      const savedEmail = localStorage.getItem("email");

      if (savedName) {
        setName(savedName);
      }

      if (savedEmail) {
        setEmail(savedEmail);
      }

      return () => {
        setEmail("");
        setName("");
      };
    },
    []);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    if (!name || !email) {
      return setError(true);
    } else {
      setError(false);
    }
    setEmail("");
    setName("");
  };

  return (
    <div>
      <img style={{ height: "700px" }} src={pic.resort} alt="view" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          justifyItems: "center",
        }}
      >
        <div>
          <h1>
            <TbWorld style={{ color: "rgb(10, 77, 63)" }} />
          </h1>
          <h2 style={{ fontWeight: "300" }}>hotel Address</h2>
          <p style={{ color: "rgb(10, 77, 63)", fontSize: "30px" }}>
            25 North Street,Dubai
          </p>
        </div>

        <div>
          <h1>
            <TbMail style={{ color: "rgb(10, 77, 63)" }} />
          </h1>
          <h2 style={{ fontWeight: "300" }}>Official Mail</h2>
          <p style={{ color: "rgb(10, 77, 63)", fontSize: "30px" }}>
            {" "}
            info@sahara.com
          </p>
        </div>

        <div>
          <h1>
            <TbPhone style={{ color: "rgb(10, 77, 63)" }} />
          </h1>
          <h2 style={{ fontWeight: "300" }}>Official Phone</h2>
          <p style={{ color: "rgb(10, 77, 63)", fontSize: "30px" }}>
            +91 256-987-239
          </p>
        </div>
      </div>

      <h1
        style={{
          color: "rgb(10, 77, 63)",
          fontSize: "50px",
          marginTop: "30px",
        }}
      >
        Send a Message
      </h1>

      <form action="" onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            justifyItems: "center",
            marginTop: "100px",
          }}
        >
          {" "}
          <input
            style={{
              color: "rgb(10, 77, 63)",
              fontSize: "20px",
              fontWeight: "400",
              border: "none",
              padding: "20px",
              width: "550px",
            }}
            value={name}
            type="text"
            placeholder="First Name"
            required
            onChange={handleName}
            minLength={3}
            maxLength={20}
          />
          <input
            style={{
              padding: "20px",
              width: "550px",
              color: "rgb(10, 77, 63)",
              fontSize: "20px",
              fontWeight: "400",
              border: "none",
            }}
            type="text"
            placeholder="Last Name"
            required
            minLength={3}
            maxLength={20}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            justifyItems: "center",
            marginTop: "50px",
          }}
        >
          <input
            style={{
              padding: "20px",
              width: "550px",
              color: "rgb(10, 77, 63)",
              fontSize: "20px",
              fontWeight: "400",
              border: "none",
            }}
            type="text"
            placeholder="Email"
            required
            value={email}
            minLength={3}
            maxLength={30}
            onChange={handleEmail}
          />
          <input
            style={{
              padding: "20px",
              width: "550px",
              color: "rgb(10, 77, 63)",
              fontSize: "20px",
              fontWeight: "400",
              border: "none",
            }}
            type="text"
            placeholder="Subject"
          />
        </div>

        <textarea
          style={{
            color: "rgb(10, 77, 63)",
            fontSize: "20px",
            fontWeight: "400",
            width: "1200px",
            marginTop: "50px",
            marginBottom: "50px",
            border: "none",
            padding: "10px",
          }}
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        {error && <p style={{ fontSize: "60px" }}> please fill it! </p>}
        <button
          type="submit"
          style={{
            marginBottom: "50px",
            backgroundColor: "rgb(10, 77, 63)",
            color: "white",
            padding: "15px",
            width: "160px",
            fontSize: "20px",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>

      <Footer />
    </div>
  );
}
