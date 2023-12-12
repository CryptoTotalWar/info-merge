// src/components/CategoryFilter.tsx
"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface CategoryFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  onFilterChange,
}) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <div key={category} className="flex items-center space-x-2">
          <Checkbox
            id={`checkbox-${category}`}
            defaultChecked
            onCheckedChange={() => onFilterChange(category)}
          />
          <label
            htmlFor={`checkbox-${category}`}
            className="text-sm font-medium leading-none cursor-pointer"
          >
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
