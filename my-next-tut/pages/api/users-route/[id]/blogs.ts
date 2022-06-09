import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // this log shows the query param
    // in this case is { id: '12' }
    console.log(req.query);

    // to see what kind of request came in
    console.log(req.method);

    // req.query
    // req.cookies
    // req.body

    return res.send('Blogs');
}