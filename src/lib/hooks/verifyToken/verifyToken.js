import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
export const verifyTokenNom = async(req, res, next)=>{
  const cookieStore = cookies();
  const token = cookieStore.get('next-auth.session-token');
  // if (!token) {
  //   return res.status(401).send({ message: 'unauthorized access' });
  // }
  console.log(token)

  // try {
  //   const decoded = jwt.verify(token.value, process.env.NEXT_PUBLIC_AUTH_SECRET);
  //   console.log(decoded, "this is decoded");
  //   req.user = decoded;
  //   next();
  // } catch (err) {
  //   console.error(err);
  //   // return res.status(401).send({ message: 'unauthorized access' });
  // }
}


export const verifyAdmin = async (req, res, next) => {
  const token = req.cookies['next-auth.session-token']
  // console.log(token, "this is token")
    // console.log('hello')
    // const user = req.cookies?.token
    // console.log("this is veryfi admin", user)
    
    // const query = { email: user?.email }
    // const result = await usersCollection.findOne(query)
    // // console.log(result?.role)
    // if (!result || result?.role !== 'Admin')
    //   return res.status(401).send({ message: 'unauthorized access!!' })

    // next()
  }
     