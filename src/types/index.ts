// src/types/index.ts

export type HeadlineType = {
  id: string;
  headlineContent: string;
  hyperlink: string;
  categoryTag: string;
  createdAt: Date;
  // Other fields as needed
};

export type HeadlinesByCategoryType = {
  [category: string]: HeadlineType[];
};
