import React, { useEffect, useState } from "react";
import "../css/register.css";
import Btn from "../components/Btn";
import { BaseUrl } from "../components";

const Register = () => {
  const [levelSelectedOption, setLevelSelectedOption] = useState("");
  const [chapterSelectedOption, setChapterSelectedOption] = useState("");
  const [stackOption, setStackOption] = useState("");
  const [genderSelectedOption, setGenderSelectedOption] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const [message, setMessage] = useState("");

  const isNullOrEmpty = (value) =>
    value === null || value === undefined || value === "";
  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      phone: phone,
      email: email,
      level: levelSelectedOption,
      department: department,
      chapter: chapterSelectedOption,
      stack: stackOption,
      gender: genderSelectedOption,
    };
    for (const key in body) {
      if (body.hasOwnProperty(key) && isNullOrEmpty(body[key])) {
        setMessage(`${key.replaceAll("_", " ")} cannot be blank or empty`);
        return null;
      }
    }
    setMessage("");
    const url = `${BaseUrl()}/member_api/`;
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ApiAuthorization: process.env.REACT_APP_API_KEY,
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      const response = await request.json();
      setMessage(response.message);
    } else {
      const response = await request.json();
      setMessage(response.message);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="register register-style">
      <div className="register-form register-form-style">
        <div className="heading">
          <h2>Join the Community</h2>
          <div className="line"></div>
        </div>
        <div className="message-banner">
          {message ? <p>{message}</p> : <></>}
        </div>
        <div className="input-form">
          <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div class="input-container">
            <i class="fa fa-user icon"></i>
            <input
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="Middle Name"
            />
          </div>
          <div class="input-container">
            <i class="fa fa-phone icon"></i>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
            />
          </div>
          <div class="input-container">
            <i class="fa fa-envelope icon"></i>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div class="input-container">
            <i class="fa fa-level-up-alt icon"></i>
            <select
              id="options"
              value={genderSelectedOption}
              onChange={(e) => setGenderSelectedOption(e.target.value)}
              placeholder="Select Gender"
            >
              <option value="" disabled>
                Select your gender...
              </option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div class="input-container">
            <i class="fa fa-university icon"></i>
            <select
              id="options"
              value={chapterSelectedOption}
              onChange={(e) => setChapterSelectedOption(e.target.value)}
              placeholder="Select Chapter"
            >
              <option value="" disabled>
                Select a chapter...
              </option>
              <option value="AUTOMACOM UNILAG CHAPTER">
                AUTOMACOM UNILAG CHAPTER
              </option>
              <option value="AUTOMACOM FUTA CHAPTER">
                AUTOMACOM FUTA CHAPTER
              </option>
              <option value="AUTOMACOM BOWEN CHAPTER">
                AUTOMACOM BOWEN CHAPTER
              </option>
              <option value="AUTOMACOM FUOYE CHAPTER">
                AUTOMACOM FUOYE CHAPTER
              </option>
              <option value="AUTOMACOM EKSU CHAPTER">
                AUTOMACOM EKSU CHAPTER
              </option>
            </select>
          </div>
          <div class="input-container">
            <i class="fa fa-layer-group icon"></i>
            <select
              id="options"
              value={stackOption}
              onChange={(e) => setStackOption(e.target.value)}
              placeholder="Select Stack"
            >
              <option value="" disabled>
                Select a stack...
              </option>
              <option value="EMBEDDED SYSTEMS">EMBEDDED SYSTEMS</option>
              <option value="ARTIFICIAL INTELLIGENCE (AI)">
                ARTIFICIAL INTELLIGENCE
              </option>
              <option value="INTERNET OF THINGS (IOT)">
                INTERNET OF THINGS
              </option>
              <option value="ROBOTICS ENGINEERING">ROBOTICS ENGINEERING</option>
              <option value="SOFTWARE ENGINEERING">SOFTWARE ENGINEERING</option>
              <option value="PRODUCT DESIGN (3D MODELING)">
                PRODUCT DESIGN (3D MODELING)
              </option>
            </select>
          </div>
          <div class="input-container">
            <i class="fa fa-building icon"></i>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Department"
            />
          </div>
          <div class="input-container">
            <i class="fa fa-level-up-alt icon"></i>
            <select
              id="options"
              value={levelSelectedOption}
              onChange={(e) => setLevelSelectedOption(e.target.value)}
              placeholder="Select Level"
            >
              <option value="" disabled>
                Select your level...
              </option>
              <option value="100 Level">100 Level</option>
              <option value="200 Level">200 Level</option>
              <option value="300 Level">300 Level</option>
              <option value="400 Level">400 Level</option>
              <option value="500 Level">500 Level</option>
              <option value="500 Level">600 Level</option>
            </select>
          </div>
        </div>
        <div className="join-r-btn" onClick={handleSubmit}>
          <Btn content={"Register"} />
        </div>
      </div>
    </div>
  );
};

export default Register;
