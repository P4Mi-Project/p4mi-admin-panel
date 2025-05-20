"use server"
import { GetUsersResult } from "firebase-admin/auth"
import { firestore,auth } from "../../../../../configs/firebase_serverside"


export async function GET(request : Request) {
    const auth_token:string|undefined = request.headers.get("Authorization")?.substring(7)
    if (auth_token != undefined) {
        // only then do something
    }
    const dat = await firestore.collection("courses").get()
    dat.forEach((item) => {
        console.log(item.id, item.data())
    })
    const userList = await auth.getUsers
    const users = await userList
    
    users.forEach ((item) => {
        console.log(item)
    })
    return Response.json({"msg": "test message", "url":request.url, "token" : auth_token, "courses":dat})
}