import { USERS } from '@/data/users'
import { User } from '@/interfaces/user'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
    user?: User
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { email,password } = req.body
    const user = USERS.find(user => user.email === email && user.password === password)

    if (!user) {
        return res.status(401).json({ message: 'User not found' })
    }
    //Setear alguna cookie
    res.setHeader('Set-Cookie', 'path=/; access=true; samesite=lax; HttpOnly') 
    res.status(200).json({ message: 'User found successfully', user })
}