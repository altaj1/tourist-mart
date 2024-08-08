import { connectDB } from "@/lib/connectDB"
import { tokenVerify, verifyAdmin } from "@/lib/hooks/verifyToken/verifyToken";

import { NextResponse } from "next/server";

export const GET = async (request) =>{
    // console.log(" calling api", request)
    const verifyToken = tokenVerify(request)
    console.log(verifyToken, "this is verify token")
    const isAdmin = await verifyAdmin();
    
    const db = await connectDB();
    const usersCollection = db.collection('users')
    // try {
        
    // } catch (error) {
        
    // }
    return NextResponse.json({message : "No Data Found"})
}