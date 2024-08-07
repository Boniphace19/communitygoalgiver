import { NextResponse } from "next/server";
//import { prisma } from "../../../lib/client";
import { hash } from "bcrypt";
import * as z from "zod";
import { collection, addDoc } from 'firebase/firestore';
import {db} from "../../../app/config/firebase";
import { toast, Toaster } from "sonner";
//define schema fo user validation
const userSchema = z
  .object({
    fullname: z.string().min(1, "Fullname required"),
    username: z.string().min(1, "Username is required").max(100),
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
export async function POST(req: Request) {
  try {
    const data = await req.json();
    userSchema.parse(data);

    // Destructure the validated data
    const { fullname, username, email, mobileno, password, confirmPassword } = data;

    // Add the document to Firestore
    const docRef = await addDoc(collection(db, 'users'), {
      fullname,
      username,
      email,
      mobileno,
      password,
      confirmPassword
    });

    // Respond with the document ID
    return NextResponse.json({
      message: 'User created successfully',
      id: docRef.id,
      status: 201
    });
    
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
