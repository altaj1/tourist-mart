export const verifyToken = async(req, res, next)=>{

}
export const verifyAdmin = async (req, res, next) => {
  const token = req
  // console.log(token.cookies, "this is token")
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
     