import { Label, TextInput, Button } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";


export default function SignIn() {

  return (
    <div className="h-[600px] mt-20">
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
          <form className="flex flex-col gap-4">
            <div>
              <Label className="font-bold m-2 text-sm" value="Your Mail" />
              <TextInput
                type="email"
                placeholder="example@gmail.com"
                id="email"
              />
            </div>
            <div>
              <Label className="font-bold m-2 text-sm" value="Your Password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>

            {/*  Adding SignUp button Here */}
            <Button gradientDuoTone="purpleToPink" type="submit">
              SignIn
            </Button>

            <OAuth />

            {/* If Account Not Created Than SignIn */}
            <div className="flex gap-2 text-sm">
              <span>Don't Have account?</span>
              <Link to="/sign-up" className="text-blue-400">
                Sign-up
              </Link>
            </div>
          </form>
        </div>
      </div>

      
    </div>
  );
}