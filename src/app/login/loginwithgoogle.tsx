"use client";
import { login } from "../../../components/action";
import GoogleButton from "react-google-button";

export default function LoginWithGoogle() {
  return (
    <div
      style={{
        alignSelf: "center",
        marginTop: "20px",
      }}
    >
      <GoogleButton
        onClick={() => {
          login("google");
        }}
      />
    </div>
  );
}
