// app/api/auth/route.js
export async function GET(req, res) {
    const token = req.cookies.token;
  
//     if (!token) {
//       return res.status(401).json({ message: 'Not authenticated' });
//     }
  
//     const user = await verifyToken(token);
  
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid token' });
//     }
  
//     res.status(200).json(user);
//   }
  
//   async function verifyToken(token) {
//     // Implement token verification logic here
//     // Return user object if token is valid
    return { id: 1, role: 'admin' }; // Example user
  }
  