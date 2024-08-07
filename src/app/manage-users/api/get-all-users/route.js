import { connectDB } from "@/lib/connectDB"
import { verifyAdmin,  verifyTokenNom,  } from "@/lib/hooks/verifyToken/verifyToken";
import { NextResponse } from "next/server";

export const GET = async (req) =>{
    // console.log(" calling api", req)
    const verifyToken = verifyTokenNom(req)
    const { valid, message, decoded } = verifyAdmin(req);
    
    const db = await connectDB();
    const usersCollection = db.collection('users')
    // try {
        
    // } catch (error) {
        
    // }
    return NextResponse.json({message : "No Data Found"})
}