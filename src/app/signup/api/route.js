import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (request) => {
  try {
    // Parse the incoming request's JSON body
    const newUser = await request.json();

    // Connect to the database
    const db = await connectDB();
    const userCollection = db.collection('users');

    // Check if a user with the same email already exists
    const isExist = await userCollection.findOne({ email: newUser.email });
    console.log(isExist);

    if (isExist) {
      return NextResponse.json({ message: "User Exists" }, { status: 409 }); // 409 Conflict
    }

    // Hash the user's password
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);

    // Insert the new user into the database
    const resp = await userCollection.insertOne({ ...newUser, password: hashedPassword });
    console.log(resp, "this is response");

    return NextResponse.json({ message: 'User Created' }, { status: 201 }); // 201 Created
  } catch (error) {
    console.error('Error during user creation:', error);
    return NextResponse.json(
      { message: 'Something Went Wrong', error: error.message },
      { status: 500 }
    );
  }
};
