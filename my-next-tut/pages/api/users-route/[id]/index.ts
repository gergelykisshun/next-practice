import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // this log shows the query param
    // in this case is { id: '12' }
    console.log(req.query)

    // req.query
    // req.cookies
    // req.body

    return res.send(200);
}