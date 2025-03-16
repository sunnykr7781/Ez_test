import React, {useState} from 'react'
import axios from "axios"
import "./LeftSide.css"
// import main from "../../../src/Assets"


const LeftSide = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (email.endsWith("@ez.works")) {
      setError("Emails ending with '@ez.works' are not allowed.");
      return;
    }

    try {
      const response = await axios.post("https://test.ezworks.ai/api", { email });

      if (response.status === 200) {
        setMessage("✅ Form Submitted Successfully!");
        setError(""); // Clear error
        setEmail("");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setError("Emails ending with '@ez.works' are not allowed.");
      } else {
        setError("❌ Submission failed. Please try again.");
      }
    }
    
  };

  return (
    <div>
      <div className="left
      ">
        <div className="">
          <img src="/Assets/logos/main.png" alt="main logo" className='mainlogo' />
          <h3 className='title'>Suite Of Business Support Services</h3>
          <div className="dummy">          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem <br /> ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
          </div>
          <form onSubmit={handleSubmit} className="form">

          <input  type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)} className="email-input" />
          <button type="submit" className="button">Contact Me</button>
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
          </form>

        </div>


      </div>
    </div>
  )
}


export default LeftSide
