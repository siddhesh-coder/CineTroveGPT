import React, { useRef, useState } from "react";
import { auth } from "../../utils/firebase";
import AuthHeader from "./AuthHeader";
import Input from "../ui/Input";
import BaseLink from "./BaseLink";
import LoginButton from "./LoginButton";
import FormHeader from "./FormHeader";
import {
  confirmPasswordValidation,
  emailValidation,
  passwordValidation,
} from "../../utils/validate";
import BgImage from "../Home/BgImage";
import ErrorMsg from "../ui/ErrorMsg";
import newUser from "../../utils/newUserAuth";
import existingUser from "../../utils/existingUserAuth";
import useNotify from "../../hooks/useNotify";

const Auth = () => {
  const notify = useNotify();
  const [activeSignIn, setActiveSignIn] = useState(true);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState("");

  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleSubmit = async () => {
    if (activeSignIn) {
      const emailError = emailValidation(email.current.value);
      const passwordError = passwordValidation(password.current.value);

      setEmailErrorMsg(emailError);
      setPasswordErrorMsg(passwordError);

      if (emailError === null && passwordError === null) {
        try {
          const user = await existingUser(
            auth,
            email.current.value,
            password.current.value
          );

          notify("success", user.email + " welcome");
        } catch (error) {
          if (error.message === "Firebase: Error (auth/invalid-credential).")
            notify("error", "Invalid credential");
        }
      }
    }

    if (!activeSignIn) {
      const emailError = emailValidation(email.current.value);
      const passwordError = passwordValidation(password.current.value);
      const confirmPasswordError = confirmPasswordValidation(
        confirmPassword.current.value
      );

      setEmailErrorMsg(emailError);
      setPasswordErrorMsg(passwordError);
      setConfirmPasswordErrorMsg(confirmPasswordError);

      if (
        emailError === null &&
        passwordError === null &&
        confirmPasswordError === null
      ) {
        try {
          const user = await newUser(
            auth,
            email.current.value,
            password.current.value
          );
          notify("success", user.email + " welcome");
        } catch (error) {
          if (error.message === "Firebase: Error (auth/email-already-in-use).")
            notify("error", "Email already in use");
        }
      }
    }
  };

  return (
    <>
      <BgImage />
      <div className="absolute w-full h-full bg-custom-gradient2" />
      <div className="flex flex-col items-center justify-between w-full h-full">
        <AuthHeader />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-[450px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] flex gap-3 flex-col h-auto sm:h-[400px] md:h-[450px] lg:h-[550px] mt-24 rounded-lg bg-black opacity-75 py-10 px-16"
        >
          {activeSignIn ? (
            <FormHeader title={"Sign In"} />
          ) : (
            <FormHeader title={"Sign Up"} />
          )}
          <div className="flex flex-col gap-2">
            <Input
              refer={email}
              placeholder={"email address"}
              label={"Email address"}
              type={"email"}
            />
            <ErrorMsg errorMsg={emailErrorMsg} />
            <Input
              refer={password}
              placeholder={"••••••••"}
              label={"Password"}
              type={"password"}
            />
            <ErrorMsg errorMsg={passwordErrorMsg} />
            {!activeSignIn && (
              <>
                <Input
                  refer={confirmPassword}
                  placeholder={"••••••••"}
                  label={"Confirm Password"}
                  type={"password"}
                />
                <ErrorMsg errorMsg={confirmPasswordErrorMsg} />
              </>
            )}
          </div>
          <div className="text-center">
            <LoginButton
              activeAuthState={activeSignIn ? "Sign In" : "Sign Up"}
              handleSubmit={handleSubmit}
            />
          </div>
          {activeSignIn ? (
            <BaseLink
              baseTitle={"New to CineTroveGPT?"}
              baseLinkName={"Sign Up now"}
              setActiveSignIn={setActiveSignIn}
              activeSignIn={activeSignIn}
            />
          ) : (
            <BaseLink
              baseTitle={"Already a member?"}
              baseLinkName={"Sign In now"}
              setActiveSignIn={setActiveSignIn}
              activeSignIn={activeSignIn}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default Auth;
