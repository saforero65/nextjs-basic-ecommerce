import { FAQS } from "@/data/faqs";
import { Faq } from "@/interfaces/faq";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = Faq[] | { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json(FAQS);
  }
  res.status(405).json({ message: "Method not allowed" });
}
