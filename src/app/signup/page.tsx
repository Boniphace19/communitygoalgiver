"use client";
import { toast, Toaster } from "sonner";
import React from "react";
import Login from "../login/page";
import styles from "/components/header.module.css";
import Modal from "../../../components/modal";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {addDoc, collection,doc} from "firebase/firestore";
import {db, auth} from "@/app/config/firebase";

import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { signIn } from "next-auth/react";

interface ApiResponse {
  user: null | { username: string };
  message: string;
}
interface SignUpProps {
  closeModal: () => void;
}

const FormSchema = z
  .object({
    firstname: z.string().min(1, "Fullname required"),
    lastname: z.string().min(1, "Username is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    mobileno: z.string().min(1, "Mobile number required").max(10),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

type Inputs = z.infer<typeof FormSchema>;
export default function SignUp({ closeModal }: SignUpProps) {
  const [openUp, setOpenUp] = useState(false);
  const [message, setMessage] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [message1, setMessage1] = useState(null);
  const [submitted, setSubmitted] = useState(true);
  const router = useRouter();
  //configuring resolver
  const {
    register,reset,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      mobileno: "",
      confirmPassword: "",
    },
    resolver: zodResolver(FormSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      const docRef =await addDoc(collection(db,"users"),{
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        mobileno: data.mobileno,
        password: data.password,
        confirmPassword: data.confirmPassword
      });
        
      reset(); 
      router.push("/home");
      
      toast.success('Sign up successful! Verification email sent',{duration:5000});

      
      setOpenUp(true);
    } catch (error) {
      toast.error('Sign up failed! Please try again.');
      console.error("Error adding document: ", error);
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
        SIGN UP
      </h3>
      <hr className={styles.hr}></hr>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          {...register("firstname")}
          id="firstname"
          name="firstname"
          type="text"
          placeholder="First name"
          className={styles.formInput}
        />
        {errors.firstname && (
          <div className="text-red-500">{errors.firstname.message}</div>
        )}
        <input
          {...register("lastname")}
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last name"
          className={styles.formInput}
        />
        {errors.lastname && (
          <div className="text-red-500">{errors.lastname.message}</div>
        )}
        {feedback && <p className="text-red-500 ">{feedback}</p>}
        <input
          {...register("email")}
          name="email"
          type="email"
          id="email"
          placeholder="E-mail"
          className={styles.formInput}
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        {message && <p className="text-red-500 ">{message}</p>}
        <input
          {...register("mobileno")}
          name="mobileno"
          type="number"
          id="mobileno"
          placeholder="Mobile number"
          className={styles.formInput}
        />
        {errors.mobileno && (
          <div className="text-red-500">{errors.mobileno.message}</div>
        )}
        <input
          {...register("password")}
          name="password"
          id="password"
          type="password"
          placeholder="Password (8-characters)"
          className={styles.formInput}
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <input
          {...register("confirmPassword")}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm-password (8-characters)"
          className={styles.formInput}
        />
        {errors.confirmPassword && (
          <div className="text-red-500">{errors.confirmPassword.message}</div>
        )}
        {message1 && <p className="text-red-500">{message1}</p>}
        <button disabled={isSubmitting} type="submit" className={styles.bttn}>
          <span>{isSubmitting ? "Registering....." : " SIGN UP"}</span>
        </button>
      </form>
      <div>
        <Toaster richColors position="top-center" />
      </div>
      <Modal isOpen={openUp} onClose={() => setOpenUp(false)}>
        {/*here to import signin  */}
        <Login />
      </Modal>
      ;
    </div>
  );
}
