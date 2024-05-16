import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

function Home() {
  return (
    <div>
      <div className="h-[920px] bg-white bg-gradient-to-b from-white via-blue-500 to-red-500 text-white">
        <div className="grid grid-cols-2 grid-row-1">
          <h1 className="relative top-[200px] left-[20%] text-6xl">
            Build like a team <br /> of hundreds_
          </h1>
          <h1 className="relative top-[200px] right-[10%] text-2xl w-[80%]">
            Build your entire backend within minutes and scale effortlessly
            using Appwrite's open-source platform. Add Authentication,
            Databases, Functions, Storage, and Messaging to your projects using
            the frameworks and languages of your choice.
            <Link to="/sign-up">
              <Button type="submit" className="mt-[20px] ">
                Get Started
              </Button>
            </Link>
          </h1>
        </div>
      </div>
      <div className=" h-[200px] ">
        <h1 className="flex justify-center mt-10 text-3xl font-bold">
          Your backend, minus the hassle
        </h1>
        <p className="flex justify-center text-2xl ">Build secure and scalable applications with less code. Add authentication, databases, storage, and more using Appwrite's development platform.</p>
      </div>
    </div>
  );
}

export default Home;
