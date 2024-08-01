import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials'
import FacebookProvider from "next-auth/providers/facebook";
import bcrypt from "bcrypt";

const handler = NextAuth({
    session:{
        strategy:"jwt",
        maxAge:30 * 24 * 60 * 60,
        rolling:false,
    },
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials) {
               
                const {email, password} = credentials;
                if (!email || !password) {
                    return null
                }
                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({email});
                if (!currentUser) {
                    return null
                }
                const passwordMatched = bcrypt.compareSync(
                    password, 
                    currentUser.password
                )
                if (!passwordMatched) {
                    return null;
                }
                return currentUser
            },
            
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
          }),
          FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FCEBOOK_APP_ID,
            clientSecret: process.env.NEXT_PUBLIC_FCEBOOK_APP_SECRETE
          })
    ],
      callbacks:{
        async signIn({user, account}){
            if (account.provider ==="google" || account.provider ==="facebook") {
                const {name, email} = user;
                try {
                    const db = await connectDB();
                    const usersCollection = await db.collection("users");
                    const isUserExist = await usersCollection.findOne({email});
                    if (!isUserExist) {
                        const res = await usersCollection.insertOne({...user, role:"user"});
                        return user;
                    }
                    else{
                        return user
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
    },
    pages:{
        signIn:"login"
    }
   
  
})
export {handler as GET, handler as POST};