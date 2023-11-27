// src/app/api/headlines/route.ts
import { prisma } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { HeadlinesByCategoryType } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const headlines = await prisma.headline.findMany({
      orderBy: {
        categoryTag: "asc",
        createdAt: "desc",
      },
    });

    // Group headlines by category
    const headlinesByCategory = headlines.reduce(
      (acc: HeadlinesByCategoryType, headline) => {
        acc[headline.categoryTag] = acc[headline.categoryTag] || [];
        acc[headline.categoryTag].push(headline);
        return acc;
      },
      {}
    );

    res.status(200).json(headlinesByCategory);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
