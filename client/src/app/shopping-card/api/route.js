import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"

export const GET = async (request, {params})=>{
    const db = await connectDB();
    const productsCollection = db.collection("products")
    const {searchParams} = new URL (request.url);
    const mainProductId = searchParams.get('mainProductId')
    const addEmail = searchParams.get('addEmail')
    if (!addEmail){
        return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
    const prevProduct = await productsCollection.findOne({_id:new ObjectId(mainProductId)});
    delete prevProduct._id;
    console.log(prevProduct,"thsi is sopping cart", addEmail)


    return NextResponse.json({data: "not fount"})
}