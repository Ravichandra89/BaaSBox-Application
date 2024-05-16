import React from "react";
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { app } from "../Firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const HandleGoogleAuth = async () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" }); 
  try {
    const resultFromGoogle = await signInWithPopup(auth, provider);
    console.log(resultFromGoogle);
  } catch (error) {
    console.log(error);
  }
};

function OAuth() {
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={HandleGoogleAuth}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-3" />
      Continue with Google
    </Button>
  );
}

export default OAuth;
