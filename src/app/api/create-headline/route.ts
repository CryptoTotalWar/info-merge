import { Prisma } from "@prisma/client";
import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { headlineContent, hyperlink, categoryTag } = req.body;
      const createdAt = new Date();
      const week = 7 * 24 * 60 * 60 * 1000;
      const expiration = new Date(createdAt.getTime() + week); // 7 days from createdAt

      const newHeadline = await prisma.headline.create({
        data: {
          headlineContent,
          hyperlink,
          categoryTag,
          createdAt,
          updatedAt: createdAt,
          isBreakingNews: false,
          expiration,
        } as Prisma.HeadlineCreateInput,
      });

      res.status(200).json(newHeadline);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the headline." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
