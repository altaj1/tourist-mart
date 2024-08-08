import { cookies } from 'next/headers'
import jwt from "jsonwebtoken"
import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/connectDB'
export const tokenVerify =async (req) =>{
    const cookieStore = cookies()
    const theme =  cookieStore.get('token')
    if (!theme) {
        return NextResponse.json({ statusText: "Something Went Wrong" }, {status:401});
      }
       jwt.verify(theme.value, process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET, (err, decoded)=>{
        if (err) {
            console.log(err)
            return  NextResponse.json({ statusText: "Something Went Wrong" }, {status:401});
        }
        // console.log(decoded)
        return NextResponse.json({decoded : decoded}) ;
        
    })
}

export const verifyAdmin = async ()=>{
    const db = await connectDB();
    const isVerify = tokenVerify()
    // console.log(isVerify, "this is isveryfy")
}


