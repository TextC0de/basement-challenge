import {NextApiRequest, NextApiResponse} from "next";

import mock from "../../../product/mock.json";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        res.status(400);
    }

    res.status(200).json(mock);
};

export default handler;
