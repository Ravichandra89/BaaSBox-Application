import { Label, TextInput, Button } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  // State to store form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // On Change Handler
  const changeHandler = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  // On Submit Handler
  const submitHandler = (event) => {
    event.preventDefault();
    // Here you can submit the form data
    console.log(formData);
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-4 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* Left Side Content */}
        <div className="flex-1">
          <Link className=" font-bold dark:text-white text-4xl">
            <span className="py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">
              BaaSBox
            </span>
            Tool
          </Link>
          <p className="mt-6 text-sm">
            This is a Demo project. You can sign up with your mail and password
            or with Google Authentication!
          </p>
        </div>

        {/* Right Side Form */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <div>
              <Label className="font-bold m-2 text-sm" value="Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id='username'
                onChange={changeHandler}
              />
            </div>
            <div>
              <Label className="font-bold m-2 text-sm" value="Your Mail" />
              <TextInput
                type="email"
                placeholder="example@gmail.com"
                id='email'
                onChange={changeHandler}
              />
            </div>
            <div>
              <Label className="font-bold m-2 text-sm" value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id='password'
                onChange={changeHandler}
              />
            </div>

            {/*  Adding SignUp button Here */}
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>

            {/* If Account Not Created Than SignIn */}
            <div className="flex gap-2 text-sm">
              <span>Have an account?</span>
              <Link to='/sign-in' className="text-blue-400"> SignIn</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
