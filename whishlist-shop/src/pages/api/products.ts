// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@/utils/product";
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../mock/data.json";

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Product[]>
) {
	const responseData = data;
	res.status(200).json(responseData);
}
