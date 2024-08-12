import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async (request, {params})=>{
    const db =await connectDB()
    const productsCollection = db.collection("products")
    const { searchParams } = new URL(request.url);
    const categoresItem = searchParams.get("categoresItem");
    const categoresProduct = searchParams.get("categoresProduct");
    const searchText = searchParams.get("search");
    const spotId = params.id
    try {
        const spotResp = await productsCollection.find({
            spotId:parseInt(spotId)}).toArray()
        if (!categoresProduct) {
            return NextResponse.json({spotResp});
        }
        if (categoresProduct) {
            const resultCategorisProduct = spotResp.find(rs=>rs.category == categoresProduct);
            if (!categoresItem) {
                return NextResponse.json({resultCategorisProduct});
            }
            if (categoresItem) {
                const requesItem = resultCategorisProduct.find(rs=>rs.category == categoresProduct);
                return NextResponse.json({requesItem});
            }
            console.log(resultCategorisProduct)
        }
    } catch (error) {
        console.log(error)
    }
    // Log the parsed query parameters for debugging
    
console.log(categoresProduct)
    // You can now use these values to query the MongoDB collection
    // Example: Find products based on the category and product name
    // const query = {};
    // if (categoresItem) {
    //   query.categoresItem = categoresItem;
    // }
    // if (categoresProduct) {
    //   query.categoresProduct = categoresProduct;
    // }

    return NextResponse.json({massge:" data not forund"})
}