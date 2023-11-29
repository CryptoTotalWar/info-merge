// app/api/headlines/route.ts

import { prisma } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { HeadlinesByCategoryType } from "@/types";

async function loader(req: NextRequest) {
  if (req.method === "GET") {
    const headlines = await prisma.headline.findMany({
      orderBy: [
        {
          categoryTag: "asc",
        },
        {
          createdAt: "desc",
        },
        { id: "asc" },
      ],
    });

    console.log("Fetched headlines:", headlines);

    const headlinesByCategory = headlines.reduce(
      (acc: HeadlinesByCategoryType, headline) => {
        acc[headline.categoryTag] = acc[headline.categoryTag] || [];
        acc[headline.categoryTag].push(headline);
        return acc;
      },
      {}
    );

    console.log("Headlines by category:", headlinesByCategory);

    return headlinesByCategory;
  } else {
    throw new Error(`Method ${req.method} Not Allowed`);
  }
}

// Export a named function for the GET method
export async function GET(req: NextRequest) {
  try {
    const data = await loader(req);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch headlines:", error);
    return NextResponse.json(
      { error: "Failed to fetch headlines" },
      { status: 500 }
    );
  }
}

// Export other named functions for other HTTP methods if needed

// Example for POST method
export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    // Handle POST requests here
  } else {
    // res.setHeader("Allow", ["POST"]);
    // res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
