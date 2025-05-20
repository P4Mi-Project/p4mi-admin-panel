import { NextRequest } from "next/server";
import { _auth } from "../../../../../configs/firebase_serverside";

export async function POST(req:NextRequest) {
    const auth_header_data:string|null = req.headers.get("Authorization")
    let auth_token:string|null = "";
    if (auth_header_data?.includes("bearer")) {
        auth_token = auth_header_data?.substring(7)
    }

    // now need to verify the data
    try {
        let verificationResult = await _auth.verifyIdToken(auth_token)
        // do something with the verification result.
    } catch(error) {
        console.log(`The user token is not valid anymore. Please login again to get a new auth token.\nError Log ${error}`)
    }
    
    
    
}