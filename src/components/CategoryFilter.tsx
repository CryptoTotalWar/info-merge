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
    <div className="flex justify-center w-full mb-6">
      <div className="category-filter p-4 bg-gray-900 opacity-95 rounded-md flex flex-wrap w-[40vw]">
        <div className="w-full flex justify-center mb-4">
          <div className="text-lg font-bold italic">Select Categories</div>
        </div>
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-3 pr-4 py-1">
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
    </div>
  );
};

export default CategoryFilter;
