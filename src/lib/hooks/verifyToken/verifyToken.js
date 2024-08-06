export const verifyAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  console.log(token)
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
     