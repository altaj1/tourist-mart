
// import { useRouter } from 'next/router';
// import React, { useEffect } from 'react';
// import useAxiosCommon from '../apiHooks/useAxiosCommon';

// const useAuth = () => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const router = useRouter();
//     const axiosCommon = useAxiosCommon()
//     useEffect(() => {
//         axiosCommon.get('/api/auth/me')
//           .then(response => {
//             setUser(response.data);
//             setLoading(false);
//           })
//           .catch(() => {
//             setUser(null);
//             setLoading(false);
//           });
//       }, []);
    
//       return { user, loading };
// };

// export default useAuth;




// import { connectDB } from "@/lib/connectDB";
// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from 'next-auth/providers/credentials';
// import FacebookProvider from "next-auth/providers/facebook";
// import bcrypt from "bcrypt";

// const handler = NextAuth({
//     secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
//     session:{
//         strategy:"jwt",
//         maxAge:30 * 24 * 60 * 60,
//         rolling:false,
//     },
   
//     providers:[
//         CredentialsProvider({
//             name: 'Credentials',
//             credentials: {
//               email: {},
//               password: {},
//             },
            
//             async authorize(credentials) {
                
//                 const { email, password } = credentials;
                
//                 if (!email || !password) {
//                   return null;
//                 }
                
//                 const db = await connectDB();
//                 const currentUser = await db.collection("users").findOne({ email });
                
//                 if (!currentUser) {
//                   return null;
//                 }
//                 const passwordMatched = bcrypt.compareSync(
//                   password,
//                   currentUser.password
//                 );
//                 console.log(passwordMatched)
//                 if (!passwordMatched) {
//                   return null;
//                 }
//                 return currentUser;
//               },
            
//         }),
//         GoogleProvider({
//             clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//             clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
//           }),
//           FacebookProvider({
//             clientId: process.env.NEXT_PUBLIC_FCEBOOK_APP_ID,
//             clientSecret: process.env.NEXT_PUBLIC_FCEBOOK_APP_SECRETE
//           })
//     ],
//     pages:{
//         signIn:"/login"
//     },
//       callbacks:{
//         async signIn({user, account}){
//             if (account.provider ==="google" || account.provider ==="facebook") {
//                 const {name, email} = user;
//                 try {
//                     const db = await connectDB();
//                     const usersCollection = await db.collection("users");
//                     const isUserExist = await usersCollection.findOne({email});
//                     if (!isUserExist) {
//                         const res = await usersCollection.insertOne({...user, role:"user"});
//                         return user;
//                     }
//                     else{
//                         return user
//                     }
//                 } catch (error) {
//                     console.log(error)
//                 }
//             }
//         },
//     },
   
   
  
// })
// export {handler as GET, handler as POST};