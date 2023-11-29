// prisma/seed.js (Note the .js extension instead of .ts)
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.headline.createMany({
    data: [
      {
        headlineContent:
          "China has acquired global network of strategically vital ports...",
        hyperlink:
          "https://www.msn.com/en-us/money/news/china-has-acquired-a-global-network-of-vital-ports/vi-AA1jxZpO",
        categoryTag: "geopolitics",
      },
      {
        headlineContent:
          "Wall St Strategists Dial Up S&P 500 Targets to 5,000 for '24...",
        hyperlink:
          "https://www.morningstar.com/news/marketwatch/2023112786/deutsche-bank-makes-the-highest-sp-500-forecast-on-wall-street-and-says-that-may-be-too-conservative",
        categoryTag: "finance",
      },
      {
        headlineContent: "will-livestreaming-be-tiktoks-amazon-killer",
        hyperlink: "https://example.com",
        categoryTag: "Updates",
      },
      {
        headlineContent: "Sample Headline 2",
        hyperlink:
          "https://www.wsj.com/tech/will-livestreaming-be-tiktoks-amazon-killer-afa9a0e6",
        categoryTag: "tech",
      },
      {
        headlineContent:
          "OpenAI researchers warned board of AI breakthrough ahead of CEO ouster",
        hyperlink:
          "https://www.reuters.com/technology/sam-altmans-ouster-openai-was-precipitated-by-letter-board-about-ai-breakthrough-2023-11-22/",
        categoryTag: "tech",
      },
      // Add more records as needed
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
