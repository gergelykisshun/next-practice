import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // req.query
    // req.cookies
    // req.body

    if(req.method === 'GET'){
        return res.status(200).send('Users')
    }

    if(req.method === 'POST'){
        return res.status(201).send('User added')
    }
    return res.send(200);
}