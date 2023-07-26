import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const FirstPage: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState<number | number>(Number);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserName(event.target.value);  
  };

  const handlePhoneInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const phoneInputValue = event.target.value
    setPhone(Number(phoneInputValue));
  };
  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
    e.preventDefault();
    const userData = {
      userName: userName,
      phone_no: phone,
      email: email,
    };
    try {
      await axios.post("http://127.0.0.1:3000/user/api/submit-form", userData);
      if(!userData.userName || !userData.phone_no || !userData.email){  
          alert('please enter the details before accessing the page');
      }
      else{
        navigate('/secondPage');
        console.log("data submitted successfully");

      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          // id="outlined-basic"
          label="Name"
          variant="filled"
          value={userName}
          onChange={handleNameInputChange}
        />
        <TextField
          required
          // id="outlined-basic"
          label="Phone Number"
          variant="filled"
          value={phone}
          onChange={handlePhoneInputChange}
        />
        <TextField
          required
          // id="outlined-basic"
          label="Email"
          variant="filled"
          value={email}
          onChange={handleEmailInputChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default FirstPage;
