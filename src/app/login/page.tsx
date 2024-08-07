"use client";
import React from "react";
import styles from "/components/header.module.css";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { login } from "../../../components/action";
import { useRouter } from "next/navigation";
import { resolve } from "path";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/config/firebase";
import { toast, Toaster } from "sonner";
import LoginWithGoogle from "./loginwithgoogle";
import GoogleButton from "react-google-button";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});
type Inputs = z.infer<typeof FormSchema>;
interface SignInProps {
  closeModal: () => void;
}
export default function Login({ closeModal }: SignInProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(FormSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      sessionStorage.setItem("user",JSON.stringify(true));
      console.log("Resetting form");
      console.log("Showing success toast");
      toast.success('Sign in successful!');      
      router.push("/home");
    
    } catch (error) {
      toast.error('Sign in failed! Please try again.');
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3
        style={{
          alignSelf: "center",
          fontFamily: "malikfont",
          fontWeight: "500",
          color: "#151b28",
          marginBottom: "5px",
        }}
      >
        SIGN IN
      </h3>
      <hr className={styles.hr}></hr>
      <form
        /*{...form}*/
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          {...register("email")}
          type="e-mail"
          name="email"
          placeholder="E-mail"
          className={styles.formInput}
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <input
          {...register("password")}
          type="password"
          name="password"
          placeholder="Password"
          className={styles.formInput}
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <button disabled={isSubmitting} type="submit" className={styles.bttn}>
          <span>{isSubmitting ? "LOADING....." : "SIGN IN"}</span>
        </button>
      </form>
      <Toaster richColors position="top-center" />

      <div className="mt-5  flex flex-nowrap justify-center items-center">
        <hr className="w-20 border-blue-300 border-2 mr-5"></hr>
        <p>OR</p>
        <hr className="w-20 border-blue-300 ml-5 border-2"></hr>
      </div>

      <GoogleButton
        style={{
          alignSelf: "center",
          marginTop: "20px",
        }}
        onClick={() => login("google")}
      />
    </div>
  );
}
