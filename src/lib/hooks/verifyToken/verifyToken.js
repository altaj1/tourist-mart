import { cookies } from 'next/headers'
 
export const tokenVerify = () =>{
    const cookieStore = cookies()
    const theme = cookieStore.get('token')
    console.log(theme)
}


